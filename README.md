# BeSafe Server
This documentation includes the API endpoint details for the women/child safety app. Please refer to it for any issues or clarifications.



## Run Locally


#### Clone the project

```bash
git clone https://github.com/DSB2004/besafe_app_server.git
```

#### Go to the project directory

```bash
  cd besafe_app_server
```

#### Install dependencies

```bash
  npm install
```

#### Start Server on Dev mode

```bash
npm run dev
```
#### Start Server on Production mode

```bash
npm run start
```

## API Reference
#### Base URL
https://besafe-app-server.vercel.app

### Auth API
#### For testing 


| Key | Value     | 
| :-------- | :------- | 
| `email` | `admin@gmail.com` | 
| `password` | `123456` |

#### Login

```http
  GET /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required!!** User Email|
| `password` | `string` | **Required!!** User Password|


#### Register

```http
  GET /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required!!** User Email|
| `password` | `string` | **Required!!** User Password|



### User API


#### Get User Profile

```http
  GET /api/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required!!** User Email|


#### Create User Profile

```http
  POST /api/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required!!** User Email|
| `name` | `string` | **Required!!** User Name|
| `dob` | `string` | **Required!!** User Date of Birth|
| `phone` | `string` | **Required!!** User Phone|
| `birth_mark` | `string` | **Required!!** Any Birth Mark|
| `blood_group` | `string` | **Required!!** User Blood Group|
| `about` | `string` | About User |

### Contact API

#### Get Contacts
```http
  GET /api/contact
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required!!** Host User Email|


#### Search Contacts
```http
  GET /api/contact/search
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required!!** Contact Name|


#### Add Contact
```http
  PUT /api/contact
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `host_email` | `string` | **Required!!** User Email|
| `contact_email` | `string` | **Required!!** Contact Email|


#### Remove Contact
```http
  DELETE /api/contact
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `host_email` | `string` | **Required!!** User Email|
| `contact_email` | `string` | **Required!!** Contact Email|




