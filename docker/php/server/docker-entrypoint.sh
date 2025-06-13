#!/bin/sh
set -e

# Get environment variables to show up in SSH session
eval "$(printenv | sed -n "s/^\([^=]\+\)=\(.*\)$/export \1=\2/p" | sed 's/"/\\\"/g' | sed '/=/s//="/' | sed 's/$/"/' >> /etc/profile)"

composer install
#
#echo "Waiting for db to be ready..."
#
#ATTEMPTS_LEFT_TO_REACH_DATABASE=60
#until [ $ATTEMPTS_LEFT_TO_REACH_DATABASE -eq 0 ] || DATABASE_ERROR=$(php bin/console dbal:run-sql "SELECT 1" 2>&1); do
#  if [ $? -eq 255 ]; then
#    # If the Doctrine command exits with 255, an unrecoverable error occurred
#    ATTEMPTS_LEFT_TO_REACH_DATABASE=0
#    break
#  fi
#  sleep 1
#  ATTEMPTS_LEFT_TO_REACH_DATABASE=$((ATTEMPTS_LEFT_TO_REACH_DATABASE - 1))
#  echo "Still waiting for db to be ready... Or maybe the db is not reachable. $ATTEMPTS_LEFT_TO_REACH_DATABASE attempts left"
#done
#
#if [ $ATTEMPTS_LEFT_TO_REACH_DATABASE -eq 0 ]; then
#  echo "ERROR : The database is not up or not reachable:"
#  echo "$DATABASE_ERROR"
#  exit 1
#else
#  echo "The database is now ready and reachable"
#fi
mkdir -p var/log
mkdir -p var/cache
setfacl -R -m u:www-data:rwX -m u:"$(whoami)":rwX var
setfacl -dR -m u:www-data:rwX -m u:"$(whoami)":rwX var
mkdir -p public/api
setfacl -R -m u:www-data:rwX -m u:"$(whoami)":rwX public
setfacl -dR -m u:www-data:rwX -m u:"$(whoami)":rwX public
mkdir -p /var/lib/php
setfacl -R -m u:www-data:rwX -m u:"$(whoami)":rwX /var/lib/php/
setfacl -dR -m u:www-data:rwX -m u:"$(whoami)":rwX /var/lib/php/

exec docker-php-entrypoint "$@"
