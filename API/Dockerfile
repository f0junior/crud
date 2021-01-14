FROM php:8.0.0-fpm-alpine
COPY . /crud
WORKDIR /crud
RUN apk update && apk add composer
RUN docker-php-ext-install pdo_mysql
RUN wget https://phar.phpunit.de/phpunit-6.4.phar
RUN chmod +x phpunit-6.4.phar
RUN mv phpunit-6.4.phar /usr/local/bin/phpunit
ENTRYPOINT php -S 0.0.0.0:8000 -t public
EXPOSE 8000