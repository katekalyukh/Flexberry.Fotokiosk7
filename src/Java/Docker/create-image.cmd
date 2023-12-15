docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk7-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t fotokiosk7-java/app ../../..
