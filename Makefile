asset_compile:
	docker compose exec php_server php bin/console asset-map:compile
asset_install:
	docker compose exec php_server php bin/console importmap:install
update_schema:
	docker compose exec php_server php bin/console d:s:u --force
update_js_routes:
	docker compose exec php_server php bin/console fos:js-routing:dump --format=json --target=assets/js/routes.json
