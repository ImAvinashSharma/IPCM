cassandra 4.0.7
cqlsh
CREATE KEYSPACE mykeyspace WITH REPLICATION = {'class':'SimpleStrategy','replication_factor':1};
use mykeyspace;
CREATE TABLE users (
    id uuid,
    username varchar,
    email varchar,
    password varchar,
    created_at timestamp,
    updated_at timestamp,
    PRIMARY KEY (username)
);
USE mykeyspace;
CREATE TABLE users (id uuid, username varchar, email varchar, password varchar, created_at timestamp, updated_at timestamp, PRIMARY KEY (username));
