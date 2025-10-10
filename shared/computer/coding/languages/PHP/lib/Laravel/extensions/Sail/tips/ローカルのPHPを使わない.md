# ローカルの PHP を使わない

sail を使う場合、ローカルの php 環境がバージョンと一致していないと composer install できない。
その場合、最初の composer install は最小限の docker を起動して行う。
https://laravel.com/docs/8.x/sail#installing-composer-dependencies-for-existing-projects
