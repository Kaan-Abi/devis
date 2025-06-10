ARG PHP_VERSION=8.4
ARG FRANKENPHP_VERSION=1
FROM dunglas/frankenphp:${FRANKENPHP_VERSION}-php${PHP_VERSION}-bookworm AS base
RUN apt-get update && apt-get install -y --no-install-recommends \
    acl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN install-php-extensions \
            pgsql \
        zip \
        intl \
        pdo \
        pdo_pgsql

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY ./docker/php/conf.d/php.ini $PHP_INI_DIR/conf.d/

COPY --from=composer:2.8 /usr/bin/composer /usr/local/bin/composer

RUN mkdir /etc/caddy/ssl
COPY ./docker/php/server/Caddyfile /etc/caddy/Caddyfile

COPY ./docker/php/server/docker-entrypoint.sh /usr/local/bin/docker-entrypoint

ENV CADDY_GLOBAL_OPTIONS="auto_https off"

RUN chmod ug+x /usr/local/bin/docker-entrypoint
ENTRYPOINT ["docker-entrypoint"]
##  ---------------------------------------------------  DEV   -----------------------------------------------------  ##

FROM base AS dev

ENV APP_ENV=dev
ENV APP_DEBUG=true
CMD [ "frankenphp", "run", "--config", "/etc/caddy/Caddyfile", "--watch" ]
##  -------------------------------------------  BUILD ASSETS  -----------------------------------------------------  ##

FROM base AS composer_builder

COPY . .
RUN composer install && composer dump-env prod

##  ---------------------------------------------------  PROD  -----------------------------------------------------  ##

FROM base AS prod

ENV APP_ENV=prod
ENV APP_DEBUG=false

COPY . .

RUN install-php-extensions opcache

COPY ./docker/php/conf.d/10-opcache.ini $PHP_INI_DIR/conf.d/
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY --from=composer_builder /app/vendor /app/vendor

ENV FRANKENPHP_CONFIG="worker ./public/index.php"
ENV APP_RUNTIME="Runtime\\FrankenPhpSymfony\\Runtime"

CMD [ "frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]

##  ----------------------------------------------  INTEGRATION  ---------------------------------------------------  ##

FROM prod AS integration

ENV APP_ENV=integ
