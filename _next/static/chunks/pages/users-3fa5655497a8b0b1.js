(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4764:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return s(4783)}])},689:function(e,t,s){"use strict";s.d(t,{_m:function(){return n},Uv:function(){return r},m6:function(){return u}});var i=s(5893),l=s(8636);let n=()=>{let{data:e}=l.trpcApiBoilerplateClient.batch.list.useQuery();return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"\uD83D\uDC8A Batches"}),(0,i.jsxs)("div",{className:"italic my-2",children:["Total No. of batches: ",null==e?void 0:e.length]}),e?(0,i.jsx)("ul",{className:"list-disc list-inside",children:e.map(e=>(0,i.jsxs)("li",{children:[e.title," - ",e.weight,"kg - ",e.purity,"%"]},e.id))}):"Loading..."]})},r=()=>{let e=l.trpcApiBoilerplateClient.util.seedDb.useMutation({onSuccess:e=>console.log(e)});return console.log("Exported - SharedSquare: ",l.SharedSquare),console.log("Exported - USER_ROLES: ",l.USER_ROLES),(0,i.jsx)("div",{className:"flex justify-center text-center mt-10",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"heisenberg.png",alt:"heisenberg",className:"mx-auto w-[110px] mb-1"}),(0,i.jsx)("div",{className:"mb-1 text-lg font-medium",children:"tRPC Frontend Boilerplate"}),(0,i.jsx)("button",{className:"bg-blueSky-400 hover:bg-blueSky-500 active:bg-blueSky-600 text-sm text-white p-1 px-3 rounded",onClick:()=>{e.mutate()},children:"Seed DB"})]})})},a=e=>{var t;let{user:s,onUserDelete:l}=e;return(0,i.jsxs)("div",{className:"flex justify-between w-72 mr-4 mb-4 p-3 rounded-md bg-blueSky-50/5 shadow shadow-blueSky-500/60",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:s.name}),(0,i.jsx)("div",{className:"italic text-gray-400",children:s.username}),(0,i.jsx)("div",{className:"capitalize",children:s.role}),(0,i.jsx)("button",{className:"bg-blueSky-400 hover:bg-blueSky-500 active:bg-blueSky-600 text-xs text-white p-0.5 px-2 rounded",onClick:()=>l(s.id),children:"Delete"})]}),(0,i.jsx)("img",{src:null!==(t=s.imageUrl)&&void 0!==t?t:"/no-user.jpg",alt:s.username,className:"rounded ml-4 h-24"})]})},u=()=>{let e=l.trpcApiBoilerplateClient.useContext(),t=async t=>{console.info("Deleted user: ",t),await e.user.list.invalidate()},{data:s}=l.trpcApiBoilerplateClient.user.list.useQuery(),n=l.trpcApiBoilerplateClient.user.destroy.useMutation({onSuccess:t}),r=e=>{n.mutate({id:e})};return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"\uD83D\uDC64 Users"}),(0,i.jsx)("div",{className:"flex flex-wrap mt-4",children:s?s.map(e=>(0,i.jsx)(a,{user:e,onUserDelete:r},e.id)):"Loading..."})]})}},4783:function(e,t,s){"use strict";s.r(t);var i=s(5893),l=s(689);t.default=()=>(0,i.jsx)(l.m6,{})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4764)}),_N_E=e.O()}]);