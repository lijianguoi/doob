import { createRouter, createWebHistory } from 'vue-router'
import PkIndexview from '../views/pk/PkIndexview.vue'
import RanklistIndexview from '../views/ranklist/RanklistIndexview'
import RecordIndexview from '../views/record/RecordIndexview'
import UserbotIndexview from '../views/user/bot/UserbotIndexview'
import NotFound from '../views/error/NotFound'
const routes = [
  {path : "/",
    name : "home",
    redirect : "/pk/",

  },
  {path : "/pk/",
    name : "pk_index",
    component : PkIndexview,

  },
  {path : "/404/",
    name : "notfound_index",
    component : NotFound,

  },
  {path : "/ranklist/",
    name : "ranklist_index",
    component : RanklistIndexview,

  },
  {path : "/user/bot/",
    name : "userbot_index",
    component : UserbotIndexview,

  },
  {path : "/record/",
    name : "record_index",
    component : RecordIndexview,

  },
  {path : "/:catchAll(.*)",
    redirect : "/404/"

  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
