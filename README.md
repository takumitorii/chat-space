# chat-space
 
## usersテーブル
### カラム : name、mail、password
### 型 : string、string、string
### 制約 : 全部not null制約 name以外に一意性制約 nameにindexを貼る
#### アソシエーション : messages_id user_group_id (外部キー)

## messagesテーブル
### カラム : body、image
### 型 : text、string
### 制約 : body、image共に空の場合 not nul
#### アソシエーション : users_id group_id(外部キー)

## groupテーブル
### カラム : name 
### 型 : string
### 制約 : not null
#### アソシエーション user_group_id message_id(外部キー)

## user_groupテーブル
### users_id group_id(中間テーブル)(外部キー)

### ※ 外部キーは全て外部キー制約をかけ、カラムの型はintegerとする
