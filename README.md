# chat-space
 
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|mail|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text||
|image|string||
|user_id|reference|foreign_key: true|
|group_id|reference|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :groups_users
- has_many :users through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user