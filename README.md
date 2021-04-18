# Records Pagination
A library based on Spring Data pagination
## How to use
You must install the dependency using the following command:
```sh
npm install records-pagination
```
Or
```sh
yarn add records-pagination
```
With the library installed you can use the classes **Pageable** and **Page**

The **Pageable** class accepts two parameters
- page [Number]
- limit [Number]

The **Page** class accepts three parameters
- pageable [Pageable]
- records [T]
- totalRecords [Number]

If you do not enter these parameters when instantiating the class, it will look for it's **default** values. For **page** it is **1** and for **limit** it is **10**

An example of use using [NestJS]

**app.controller.ts**
```sh
import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';

import { Page, Pageable } from 'records-pagination';

import { AppService } from './app.service';
import { User } from './schemas/user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<Page<User>> {
    const pageable = new Pageable(page, limit);
    return await this.appService.findAll(pageable);
  }
}
```
In the example above I expect to receive a **page** and a **limit** always, if your application is optional don't forget to make the validations.

**app.service.ts**
```sh
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Page, Pageable } from 'records-pagination';

import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(pageable: Pageable): Promise<Page<User>> {
    const [totalRecords, records] = await Promise.all([
      this.userModel.countDocuments(),
      this.userModel
        .find()
        .skip((pageable.getPage() - 1) * pageable.getLimit())
        .limit(pageable.getLimit())
        .sort([['name', 1]]),
    ]);

    return new Page<User>(pageable, records, totalRecords);
  }
}
```
In our service we are consuming a **collection** of [MongoDB] users.
If you have noticed the **Page** class, expect to receive a type. This type is used to type **records**

We have a database with the following user data:
```sh
[
  {
    "_id": "607a402d96aa69dde66716c0",
    "name": "Aline"
  },
  {
    "_id": "607a3fd896aa69dde66716ba",
    "name": "Ana"
  },
  {
    "_id": "607a3fca96aa69dde66716b9",
    "name": "André"
  },
  {
    "_id": "607a401396aa69dde66716be",
    "name": "Eduardo"
  },
  {
    "_id": "607a402396aa69dde66716bf",
    "name": "Isaac"
  },
  {
    "_id": "607a403896aa69dde66716c1",
    "name": "Maria"
  },
  {
    "_id": "607a3fe996aa69dde66716bb",
    "name": "Silvana"
  },
  {
    "_id": "607a400796aa69dde66716bd",
    "name": "Vanessa"
  },
  {
    "_id": "607a3ffb96aa69dde66716bc",
    "name": "Vilson"
  }
]
```

Now, if you call the pagination route by passing a **page** with the value **2** and a **limit** with a value **4**, we have the following return:

```sh
{
  "records": [
    {
      "_id": "607a402396aa69dde66716bf",
      "name": "Isaac"
    },
    {
      "_id": "607a403896aa69dde66716c1",
      "name": "Maria"
    },
    {
      "_id": "607a3fe996aa69dde66716bb",
      "name": "Silvana"
    },
    {
      "_id": "607a400796aa69dde66716bd",
      "name": "Vanessa"
    }
  ],
  "totalPages": 3,
  "currentPage": 2,
  "itemsPerPage": 4,
  "totalRecords": 9
}
```

## [Project link on github]

[NestJS]: <https://nestjs.com>
[MongoDB]: <https://www.mongodb.com>
[Project link on github]: <https://github.com/andrewronscki/records-pagination>