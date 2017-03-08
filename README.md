#NSS Pet Food Assignment

## Project Description

1. You are working as a junior developer team for Acme, Inc. This company sells dog food. Each brand of dog food is represented by an object in an array you get back from the (fictional database) in JSON format.

```
{
  "dog_brands": [
    {
      "name": "Chuck wagon",
      "types": [
        {
          "type": "all_natural",
          "volumes": [
            {
              "name": "32oz",
              "price": 9.99
            },
            {
              "name": "64oz",
              "price": 17.99
            }
          ]
        },
        {
          "type": "standard",
          "volumes": [
            {
              "name": "58oz",
              "price": 12.99
            },
            {
              "name": "72oz",
              "price": 21.99
            }
          ]
        }
      ]
    },
    {
      "name": "Purina",
      "types": [
        {
          "type": "puppy",
          "volumes": [
            {
              "name": "16oz",
              "price": 8.99
            },
            {
              "name": "24oz",
              "price": 14.99
            }
          ]
        },
        {
          "type": "standard",
          "volumes": [
            {
              "name": "58oz",
              "price": 19.99
            },
            {
              "name": "72oz",
              "price": 24.99
            }
          ]
        }
      ]
    }
  ]
}
```

2. Your first task is to build a product page that displays all brands of dog food, the different types, with the price and size for each container volume.

3. Once you have all of that information listed, you need to create a second JSON file to represent the new product line for Acme, Inc. They now want to sell cat food. Your product owner gives you a spreadsheet with all the new data in it. It is your job to get this data represented correctly in JSON format and then update your page to now show cat food, along with dog food.