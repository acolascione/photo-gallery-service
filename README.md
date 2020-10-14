# Project Name

> Project description

## Related Projects

  - Popular-Dishes: Anna https://github.com/TKOut-HRSF130/popular-dishes-service
  - Bookings Service: Johnny https://github.com/TKOut-HRSF130/bookings-service
  - Reviews Service: Mataeux https://github.com/TKOut-HRSF130/reviews-service


### API
### Get all photos for a restaurant
 * GET `/api/restaurants/photos/:id`\
**Path Parameters:**
  * `id` restaurant id\
**Success Status Code:** `200`\
**Returns:** JSON

```json
    {"name": "String", "id": "Number", "photos": "Array"
    }
```

### Get all photos for a user
 * GET `/api/users/photos/:id`\
**Path Parameters:**
  * `id` user id\
**Success Status Code:** `200`\
**Returns:** JSON\
```json
    {
      "id": "Number",
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "cost": "Number"
    }
```

### Add photo to a restaurant
 * POST `/api/restaurants/photos/:id`\
**Path Parameters:**
  * `id` restaurant id\
 **Request Body**: Expects JSON with the following keys.
 ```json
    {
      "name": "String",
      "avatar": "String",
      "description": "String",
      "date": "String",
      "category": "String",
      "url": "String"
    }
```
**Success Status Code:** `201`

### Add a user
 * POST `/api/users`\
 **Request Body**: Expects JSON with the following keys.
 ```json
    {
      "name": "String",
      "avatar": "String"
    }
```
**Success Status Code:** `201`

### Update a photo
 * PATCH `/api/restaurants/photo/:id`\
**Path Parameters:**
  * `id` restaurant id\
  **Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "avatar": "String",
      "description": "String",
      "date": "String",
      "category": "String",
      "url": "String"
    }
```
**Success Status Code:** `200`

### Update a user's info
 * PATCH `/api/users/:id`\
 **Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "avatar": "String"
    }
```
**Success Status Code:** `200`

### Delete a photo
 * DELETE `/api/restaurants/photo/:id`\
**Path Parameters:**
  * `id` photo id\
**Success Status Code:** `200`


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

