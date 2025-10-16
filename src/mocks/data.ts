import { ISocialEventsResponse } from './types';

export const mockNotifications: ISocialEventsResponse = {
  "total": 25,
  "results": [
    {
      "id": "evt_001",
      "type": "new_post",
      "created": "2025-10-12T10:12:00Z",
      "user": {
        "id": "u_me",
        "name": "Malvina Ponchikon",
        "username": "@malvina",
        "avatar": "https://picsum.photos/seed/me/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "post_9100",
      "collection": "Спайстори",
      "text": "опубликовал(а) новый пост, коллекцию «Спайстори»",
      "image": "https://picsum.photos/seed/spystory/48/48",
      "media": [
        { "type": "image", "url": "https://picsum.photos/seed/spystory-1/320/480", "width": 320, "height": 480 }
      ],
      "is_owner": true
    },
    {
      "id": "evt_002",
      "type": "comment",
      "created": "2025-10-12T09:21:14Z",
      "user": {
        "id": "u_101",
        "name": "Ирина",
        "username": "@irina",
        "avatar": "https://picsum.photos/seed/u101/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "post_9001",
      "image": "https://picsum.photos/seed/p9001/48/48",
      "text": "Классная фотка! Где снимали?"
    },
    {
      "id": "evt_003",
      "type": "follow",
      "created": "2025-10-12T08:03:10Z",
      "user": {
        "id": "u_245",
        "name": "Даниил",
        "username": "@daniil",
        "avatar": "https://picsum.photos/seed/u245/40/40",
        "verified": false,
        "online": false
      },
      "target_id": "u_me",
      "text": "Подписался на вас",
      "is_mutual": false,
      "is_following": false
    },
    {
      "id": "evt_004",
      "type": "paid_subscription",
      "created": "2025-10-12T07:45:00Z",
      "user": {
        "id": "u_777",
        "name": "Supporter Max",
        "username": "@max777",
        "avatar": "https://picsum.photos/seed/u777/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "u_me",
      "plan": "monthly",
      "amount": 299,
      "currency": "RUB",
      "text": "Оформил платную подписку"
    },
    {
      "id": "evt_005",
      "type": "like",
      "created": "2025-10-11T20:31:22Z",
      "user": {
        "id": "u_333",
        "name": "Марина",
        "username": "@marina333",
        "avatar": "https://picsum.photos/seed/u333/40/40",
        "verified": false,
        "online": false
      },
      "target_id": "post_8999",
      "image": "https://picsum.photos/seed/p8999/48/48",
      "text": "Понравился ваш пост",
      "users_preview": [
        {
          "id": "u_333",
          "name": "Марина",
          "username": "@marina333",
          "avatar": "https://picsum.photos/seed/u333/40/40",
          "verified": false,
          "online": false
        },
        {
          "id": "u_112",
          "name": "Олег",
          "username": "@oleg112",
          "avatar": "https://picsum.photos/seed/u112/40/40",
          "verified": true,
          "online": true
        }
      ],
      "all_users": [
        {
          "id": "u_333",
          "name": "Марина",
          "username": "@marina333",
          "avatar": "https://picsum.photos/seed/u333/40/40",
          "verified": false,
          "online": false
        },
        {
          "id": "u_112",
          "name": "Олег",
          "username": "@oleg112",
          "avatar": "https://picsum.photos/seed/u112/40/40",
          "verified": true,
          "online": true
        },
        {
          "id": "u_441",
          "name": "Анна",
          "username": "@anna441",
          "avatar": "https://picsum.photos/seed/u441/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_552",
          "name": "Дмитрий",
          "username": "@dima552",
          "avatar": "https://picsum.photos/seed/u552/40/40",
          "verified": true,
          "online": false
        },
        {
          "id": "u_663",
          "name": "Елена",
          "username": "@elena663",
          "avatar": "https://picsum.photos/seed/u663/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_774",
          "name": "Игорь",
          "username": "@igor774",
          "avatar": "https://picsum.photos/seed/u774/40/40",
          "verified": false,
          "online": false
        },
        {
          "id": "u_885",
          "name": "София",
          "username": "@sofia885",
          "avatar": "https://picsum.photos/seed/u885/40/40",
          "verified": true,
          "online": true
        },
        {
          "id": "u_996",
          "name": "Павел",
          "username": "@pavel996",
          "avatar": "https://picsum.photos/seed/u996/40/40",
          "verified": false,
          "online": false
        }
      ],
      "other_count": 6
    },
    {
      "id": "evt_006",
      "type": "mention",
      "created": "2025-10-11T18:02:55Z",
      "user": {
        "id": "u_402",
        "name": "Katya",
        "username": "@katy",
        "avatar": "https://picsum.photos/seed/u402/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "post_8990",
      "image": "https://picsum.photos/seed/p8990/48/48",
      "text": "Упомянул(а) вас в записи",
      "context": "…обзор поездки @you в Грузию…"
    },
    {
      "id": "evt_007",
      "type": "comment",
      "created": "2025-10-11T13:14:02Z",
      "user": {
        "id": "u_510",
        "name": "Alex",
        "username": "@alex",
        "avatar": "https://picsum.photos/seed/u510/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "post_9001",
      "image": "https://picsum.photos/seed/p9001/48/48",
      "text": "Супер, жду продолжение!"
    },
    {
      "id": "evt_008",
      "type": "follow",
      "created": "2025-10-11T12:31:40Z",
      "user": {
        "id": "u_009",
        "name": "Vlad",
        "username": "@vlad9",
        "avatar": "https://picsum.photos/seed/u009/40/40",
        "verified": false,
        "online": false
      },
      "target_id": "u_me",
      "text": "Теперь с вами",
      "is_mutual": true,
      "is_following": true
    },
    {
      "id": "evt_009",
      "type": "paid_subscription",
      "created": "2025-10-11T10:00:00Z",
      "user": {
        "id": "u_880",
        "name": "Pro Anna",
        "username": "@proanna",
        "avatar": "https://picsum.photos/seed/u880/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "u_me",
      "plan": "yearly",
      "amount": 2490,
      "currency": "RUB",
      "text": "Продлил(а) годовую подписку"
    },
    {
      "id": "evt_010",
      "type": "mention",
      "created": "2025-10-11T09:05:44Z",
      "user": {
        "id": "u_121",
        "name": "Сергей",
        "username": "@serg",
        "avatar": "https://picsum.photos/seed/u121/40/40",
        "verified": false,
        "online": false
      },
      "target_id": "post_8977",
      "image": "https://picsum.photos/seed/p8977/48/48",
      "text": "Отметил(а) вас",
      "context": "…как писал @you в недавнем посте…"
    },
    {
      "id": "evt_011",
      "type": "like",
      "created": "2025-10-10T21:30:20Z",
      "user": {
        "id": "u_112",
        "name": "Олег",
        "username": "@oleg112",
        "avatar": "https://picsum.photos/seed/u112/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "post_8977",
      "image": "https://picsum.photos/seed/p8977/48/48",
      "text": "Нравится ваш пост",
      "users_preview": [
        {
          "id": "u_112",
          "name": "Олег",
          "username": "@oleg112",
          "avatar": "https://picsum.photos/seed/u112/40/40",
          "verified": true,
          "online": true
        },
        {
          "id": "u_333",
          "name": "Марина",
          "username": "@marina333",
          "avatar": "https://picsum.photos/seed/u333/40/40",
          "verified": false,
          "online": false
        }
      ],
      "all_users": [
        {
          "id": "u_112",
          "name": "Олег",
          "username": "@oleg112",
          "avatar": "https://picsum.photos/seed/u112/40/40",
          "verified": true,
          "online": true
        },
        {
          "id": "u_333",
          "name": "Марина",
          "username": "@marina333",
          "avatar": "https://picsum.photos/seed/u333/40/40",
          "verified": false,
          "online": false
        },
        {
          "id": "u_201",
          "name": "Алексей",
          "username": "@alex201",
          "avatar": "https://picsum.photos/seed/u201/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_202",
          "name": "Виктория",
          "username": "@vika202",
          "avatar": "https://picsum.photos/seed/u202/40/40",
          "verified": true,
          "online": false
        },
        {
          "id": "u_203",
          "name": "Георгий",
          "username": "@george203",
          "avatar": "https://picsum.photos/seed/u203/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_204",
          "name": "Дарья",
          "username": "@dasha204",
          "avatar": "https://picsum.photos/seed/u204/40/40",
          "verified": true,
          "online": true
        },
        {
          "id": "u_205",
          "name": "Евгений",
          "username": "@evgen205",
          "avatar": "https://picsum.photos/seed/u205/40/40",
          "verified": false,
          "online": false
        },
        {
          "id": "u_206",
          "name": "Жанна",
          "username": "@zhanna206",
          "avatar": "https://picsum.photos/seed/u206/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_207",
          "name": "Илья",
          "username": "@ilya207",
          "avatar": "https://picsum.photos/seed/u207/40/40",
          "verified": true,
          "online": false
        },
        {
          "id": "u_208",
          "name": "Карина",
          "username": "@karina208",
          "avatar": "https://picsum.photos/seed/u208/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_209",
          "name": "Леонид",
          "username": "@leo209",
          "avatar": "https://picsum.photos/seed/u209/40/40",
          "verified": true,
          "online": false
        },
        {
          "id": "u_210",
          "name": "Мария",
          "username": "@maria210",
          "avatar": "https://picsum.photos/seed/u210/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_211",
          "name": "Николай",
          "username": "@nik211",
          "avatar": "https://picsum.photos/seed/u211/40/40",
          "verified": false,
          "online": false
        },
        {
          "id": "u_212",
          "name": "Ольга",
          "username": "@olga212",
          "avatar": "https://picsum.photos/seed/u212/40/40",
          "verified": true,
          "online": true
        }
      ],
      "other_count": 12
    },
    {
      "id": "evt_012",
      "type": "comment",
      "created": "2025-10-10T20:11:10Z",
      "user": {
        "id": "u_101",
        "name": "Ирина",
        "username": "@irina",
        "avatar": "https://picsum.photos/seed/u101/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "post_8977",
      "image": "https://picsum.photos/seed/p8977/48/48",
      "text": "Можно рецептик в лс? 🙂"
    },
    {
      "id": "evt_013",
      "type": "follow",
      "created": "2025-10-10T18:00:00Z",
      "user": {
        "id": "u_321",
        "name": "Maks",
        "username": "@maks321",
        "avatar": "https://picsum.photos/seed/u321/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "u_me",
      "text": "Подписался",
      "is_mutual": false,
      "is_following": true
    },
    {
      "id": "evt_014",
      "type": "mention",
      "created": "2025-10-10T16:44:00Z",
      "user": {
        "id": "u_540",
        "name": "UX Lab",
        "username": "@uxlab",
        "avatar": "https://picsum.photos/seed/u540/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "post_8950",
      "image": "https://picsum.photos/seed/p8950/48/48",
      "text": "Упомянул(а) вас в обзоре",
      "context": "…подробнее — см. комменты @you…"
    },
    {
      "id": "evt_015",
      "type": "paid_subscription",
      "created": "2025-10-10T15:10:00Z",
      "user": {
        "id": "u_007",
        "name": "Bond",
        "username": "@007",
        "avatar": "https://picsum.photos/seed/u007/40/40",
        "verified": true,
        "online": false
      },
      "target_id": "u_me",
      "plan": "monthly",
      "amount": 399,
      "currency": "RUB",
      "text": "Оформил платную подписку"
    },
    {
      "id": "evt_016",
      "type": "new_post",
      "created": "2025-10-10T14:50:00Z",
      "user": {
        "id": "u_404",
        "name": "Katerina",
        "username": "@kate",
        "avatar": "https://picsum.photos/seed/u404/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "post_9099",
      "collection": "Осенние истории",
      "text": "опубликовал(а) новый пост",
      "image": "https://picsum.photos/seed/autumn/48/48",
      "media": [
        { "type": "image", "url": "https://picsum.photos/seed/autumn-1/640/360", "width": 640, "height": 360 },
        { "type": "image", "url": "https://picsum.photos/seed/autumn-2/640/360", "width": 640, "height": 360 }
      ],
      "is_owner": false
    },
    {
      "id": "evt_017",
      "type": "like",
      "created": "2025-10-10T13:33:33Z",
      "user": {
        "id": "u_900",
        "name": "Zara",
        "username": "@zara",
        "avatar": "https://picsum.photos/seed/u900/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "post_8900",
      "image": "https://picsum.photos/seed/p8900/48/48",
      "text": "Поставил(а) лайк",
      "users_preview": [
        {
          "id": "u_900",
          "name": "Zara",
          "username": "@zara",
          "avatar": "https://picsum.photos/seed/u900/40/40",
          "verified": false,
          "online": true
        }
      ],
      "all_users": [
        {
          "id": "u_900",
          "name": "Zara",
          "username": "@zara",
          "avatar": "https://picsum.photos/seed/u900/40/40",
          "verified": false,
          "online": true
        }
      ],
      "other_count": 0
    },
    {
      "id": "evt_018",
      "type": "comment",
      "created": "2025-10-10T12:00:00Z",
      "user": {
        "id": "u_222",
        "name": "Nikita",
        "username": "@nik",
        "avatar": "https://picsum.photos/seed/u222/40/40",
        "verified": false,
        "online": false
      },
      "target_id": "post_8890",
      "image": "https://picsum.photos/seed/p8890/48/48",
      "text": "Очень атмосферно!"
    },
    {
      "id": "evt_019",
      "type": "follow",
      "created": "2025-10-10T10:10:10Z",
      "user": {
        "id": "u_654",
        "name": "Артём",
        "username": "@tem4ik",
        "avatar": "https://picsum.photos/seed/u654/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "u_me",
      "text": "Теперь с вами",
      "is_mutual": false,
      "is_following": false
    },
    {
      "id": "evt_020",
      "type": "mention",
      "created": "2025-10-10T09:09:09Z",
      "user": {
        "id": "u_731",
        "name": "Olga",
        "username": "@olga",
        "avatar": "https://picsum.photos/seed/u731/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "post_8877",
      "image": "https://picsum.photos/seed/p8877/48/48",
      "text": "Упомянул(а) вас",
      "context": "…совет от @you оказался очень кстати…"
    },
    {
      "id": "evt_021",
      "type": "paid_subscription",
      "created": "2025-10-10T08:40:00Z",
      "user": {
        "id": "u_990",
        "name": "VIP User",
        "username": "@vip",
        "avatar": "https://picsum.photos/seed/u990/40/40",
        "verified": true,
        "online": true
      },
      "target_id": "u_me",
      "plan": "yearly",
      "amount": 2990,
      "currency": "RUB",
      "text": "Оформил годовую подписку"
    },
    {
      "id": "evt_022",
      "type": "new_post",
      "created": "2025-10-10T08:20:00Z",
      "user": {
        "id": "u_120",
        "name": "Kira",
        "username": "@kira",
        "avatar": "https://picsum.photos/seed/u120/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "post_8855",
      "text": "опубликовал(а) новый пост",
      "image": "https://picsum.photos/seed/kirapost/48/48",
      "media": [
        { "type": "image", "url": "https://picsum.photos/seed/kirapost-1/600/600", "width": 600, "height": 600 }
      ],
      "is_owner": false
    },
    {
      "id": "evt_023",
      "type": "like",
      "created": "2025-10-10T08:00:00Z",
      "user": {
        "id": "u_008",
        "name": "Eva",
        "username": "@eva",
        "avatar": "https://picsum.photos/seed/u008/40/40",
        "verified": true,
        "online": false
      },
      "target_id": "post_8855",
      "image": "https://picsum.photos/seed/kirapost/48/48",
      "text": "Понравился ваш пост",
      "users_preview": [
        {
          "id": "u_008",
          "name": "Eva",
          "username": "@eva",
          "avatar": "https://picsum.photos/seed/u008/40/40",
          "verified": true,
          "online": false
        },
        {
          "id": "u_120",
          "name": "Kira",
          "username": "@kira",
          "avatar": "https://picsum.photos/seed/u120/40/40",
          "verified": false,
          "online": true
        }
      ],
      "all_users": [
        {
          "id": "u_008",
          "name": "Eva",
          "username": "@eva",
          "avatar": "https://picsum.photos/seed/u008/40/40",
          "verified": true,
          "online": false
        },
        {
          "id": "u_120",
          "name": "Kira",
          "username": "@kira",
          "avatar": "https://picsum.photos/seed/u120/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_301",
          "name": "Татьяна",
          "username": "@tanya301",
          "avatar": "https://picsum.photos/seed/u301/40/40",
          "verified": false,
          "online": true
        },
        {
          "id": "u_302",
          "name": "Сергей",
          "username": "@sergey302",
          "avatar": "https://picsum.photos/seed/u302/40/40",
          "verified": true,
          "online": false
        },
        {
          "id": "u_303",
          "name": "Вера",
          "username": "@vera303",
          "avatar": "https://picsum.photos/seed/u303/40/40",
          "verified": false,
          "online": true
        }
      ],
      "other_count": 3
    },
    {
      "id": "evt_024",
      "type": "comment",
      "created": "2025-10-10T07:50:00Z",
      "user": {
        "id": "u_560",
        "name": "Den",
        "username": "@den",
        "avatar": "https://picsum.photos/seed/u560/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "post_8855",
      "image": "https://picsum.photos/seed/kirapost/48/48",
      "text": "Поддерживаю идею!"
    },
    {
      "id": "evt_025",
      "type": "follow",
      "created": "2025-10-10T07:40:00Z",
      "user": {
        "id": "u_002",
        "name": "Leo",
        "username": "@leo",
        "avatar": "https://picsum.photos/seed/u002/40/40",
        "verified": false,
        "online": true
      },
      "target_id": "u_me",
      "text": "Подписался",
      "is_mutual": false,
      "is_following": false
    }
  ]
};

