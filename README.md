# Project Name

> Project description

## Related Projects

  - Popular-Dishes: Anna https://github.com/TKOut-HRSF130/popular-dishes-service
  - Bookings Service: Johnny https://github.com/TKOut-HRSF130/bookings-service
  - Reviews Service: Mataeux https://github.com/TKOut-HRSF130/reviews-service


### API
GET /api/restaurants/photos/:id   get all photos for a restaurant\
Path Parameters: id (restaurant id)\
Response:\
Status Code: 200\
Type: JSON\
example: [{name: String, id: Number, photos: [ {photo_id: Number, description: String, date: Date, category: String, url: String, avatar: String, and user_id:  Number} ]}]

GET /api/users/photos/:id  get all photos for user\
Path Parameters: id (user_id)\
Response:\
Status Code: 200\
Type: JSON\
example:  [{photo_id: Number, description: String, date: Date, category: String, url: String, avatar: String, and user_id: Number}]


POST /api/restaurants/photos/:id   add a photo to a restaurant\
Path Parameters: id (restaurant id)\
Response:\
Status Code: 201

POST /api/users  add a user\
Request body: {user_name: 'test', avatar: ''}\
Response:\
Status Code: 201

PATCH /api/restaurants/photo/:id  update a photo\
Path Parameters: id (restaurant id)\
Request body: {description: String and/or category: String}\
Response:\
Status Code: 200

PATCH /api/users/:user_id  update a user info\
Request body: {user_name: 'test' and/or avatar: ''}\
Response:\
Status Code: 200

DELETE /api/restaurants/photo/:id  delete a photo\
Path Parameters: id (photo_id)\
Resposne:\
Status Code: 200

DELETE /api/users/:id  delete a user\
Path Parameters: id (user_id)\
Resposne:\
Status Code: 200


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

