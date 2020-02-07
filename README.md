# chat-space
 
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|
|mail|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
<!-- - has_many :images -->


<!-- ## imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|

### Association
- belongs_to :user
- belongs_to :message
- has_many :groups -->


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users through: groups_users
<!-- - belongs_to :image -->


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user