FROM nginx:1.27.4-alpine AS base

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
RUN chown -R nginx:nginx /var/log/nginx

RUN rm -f /etc/nginx/conf.d/*

## nginx reverse proxy dev
FROM base AS rp_dev
COPY ./docker/nginx/config/reverse_proxy/dev/http.conf /etc/nginx/templates/http.conf.template
