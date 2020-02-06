# chat-space
 
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, add_index|
|mail|text|null: false, unique: true|
|password|text|null: false, unique: true|
|messages_id|integer|null: false, foreign_key: true|
|group_users_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :messages
- belongs_to :groups_users


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|text||
|users_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :users


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|group_users_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :message
- belongs_to :group_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user