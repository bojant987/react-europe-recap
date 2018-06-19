export const query1 =
    `query MyQuery($userID: ID!) {
  user(id: $userID) {
    first_name
    last_name
    company {
      name
    }
    position {
      name
    }
  }
}`;

export const query2 =
    `query MyQuery($userID: ID!) {
  user(id: $userID) {
    first_name
    last_name
    company {
      name
    }
    position {
      name
    }
    connections {
      first_name
      last_name
    }
  }
}`;

export const query3 =
    `query MyQuery($userID: ID!) {
  user(id: $userID) {
    first_name
    last_name
    company {
      name
    }
    position {
      name
    }
    connections {
      first_name
      last_name
      company {
        name
      }
      position {
        name
      }
    }
  }
}`;

export const response = `
   {
      "data": {
        "user": {
          "first_name": "Bojan",
          "last_name": "Todorovic",
          "company": {
            "name": "Gogo"
          },
          "position": {
            "name": "Frontend Engineer"
          },
          "connections": [
            {
              "first_name": "Milos",
              "last_name": "Rasic",
              "company": {
                "name": "Gogo"
              },
              "position": {
                "name": "Frontend Engineer"
              }
            },
            {
              "first_name": "Jovan",
              "last_name": "Milovanovic",
              "company": {
                "name": "Gogo"
              },
              "position": {
                "name": "Frontend Engineer"
              }
            }
          ]
        }
      }
   }
`;