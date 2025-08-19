asset_compile:
	docker compose exec php_server php bin/console asset-map:compile
asset_install:
	docker compose exec php_server php bin/console importmap:install
update_schema:
	docker compose exec php_server php bin/console d:s:u --force
update_js_routes:
	docker compose exec php_server php bin/console fos:js-routing:dump --format=json --target=assets/js/routes.json
load_fixtures:
	docker compose exec php_server php bin/console d:f:l --no-interaction
cache_clear:
	docker compose exec php_server php bin/console c:c
display_dump:
	docker compose exec php_server php bin/console server:dump