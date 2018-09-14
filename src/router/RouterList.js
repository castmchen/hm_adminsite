import Admin from '@/components/Admin';
import Login from '@/components/Login';
import Register from '@/components/Register';
import ErrorPage from '@/components/ErrorPage';
import Preminum from '@/components/Admin/Premium';
import User from '@/components/Admin/User';
import Joke from '@/components/Admin/Joke';
import Video from '@/components/Admin/Video';
import Posts from '@/components/Admin/Posts';
import CompelateTask from '@/components/Admin/CompelateTask';
import RunningTask from '@/components/Admin/RunningTask';
import PrepearTask from '@/components/Admin/PrepearTask';
import ErrorTask from '@/components/Admin/ErrorTask';
import Dating from '@/components/Admin/Dating';
import Fishing from '@/components/Admin/Fishing';
import Home from '@/components/Admin/Home';

let AdminChildRouterList = [{
  path: '',
  name: 'Admin',
  component: Home
}, {
  path: 'preminum',
  name: 'Preminum',
  component: Preminum
},
{
  path: 'user',
  name: 'User',
  component: User
},
{
  path: 'joke',
  name: 'Joke',
  component: Joke
},
{
  path: 'video',
  name: 'Video',
  component: Video
},
{
  path: 'posts',
  name: 'Posts',
  component: Posts
},
{
  path: 'compelateTask',
  name: 'CompelateTask',
  component: CompelateTask
},
{
  path: 'runningTask',
  name: 'RunningTask',
  component: RunningTask
},
{
  path: 'prepearTask',
  name: 'PrepearTask',
  component: PrepearTask
},
{
  path: 'errorTask',
  name: 'ErrorTask',
  component: ErrorTask
},
{
  path: 'dating',
  name: 'Dating',
  component: Dating
},
{
  path: 'fishing',
  name: 'Fishing',
  component: Fishing
}
]

let RouterList = [{
  path: '/admin',
  name: 'Admin',
  component: Admin,
  children: AdminChildRouterList
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/error',
  name: 'ErrorPage',
  component: ErrorPage
},
{
  path: '/',
  name: 'Home',
  redirect: { name: 'Admin' }
}
]

export {
  RouterList,
  AdminChildRouterList
}
