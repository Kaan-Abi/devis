asset_compile:
	docker compose exec php_server php bin/console asset-map:compile
asset_install:
	docker compose exec php_server php bin/console importmap:install
update_schema:
	docker compose exec php_server php bin/console d:s:u --force