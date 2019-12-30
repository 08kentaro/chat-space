# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB設計


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, nul: false, uniqe: true|
|mail|string|nul: false|

### Association
- has_many :groups, through: members
- has_many :messages
- has-many :members


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id| nul: false, uniqe: true|
|group_neme|

### Association
- has_many :users


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|integer|nul: false, foreign_key: true|
|user_id|integer|nul: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user