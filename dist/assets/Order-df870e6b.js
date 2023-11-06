import{r as c,u as n,j as e}from"./index-f480f958.js";import{d as m}from"./data-60d084d0.js";const x=({changeTitle:o})=>{c.useEffect(()=>o("Заказ"));const{orderId:r}=n(),[l,a]=c.useState(1),t=m.find(s=>s.id==r);return e.jsxs("section",{className:"order text-xl",children:[e.jsxs("p",{children:['Вы собираетесь заказать постер "',e.jsx("span",{className:"text-violet-800 font-medium",children:t.name}),'"']}),e.jsxs("form",{className:"order__form flex flex-col",action:"#",children:[e.jsxs("label",{className:"my-4 block ",children:[e.jsx("span",{className:"whitespace-nowrap",children:"Сколько постеров вам нужно?"}),e.jsxs("div",{className:"box my-2 w-min",children:[e.jsx("input",{className:"border-2 block rounded w-full",value:l,onChange:s=>a(s.target.value),type:"text"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"border-2 px-3 py-2 w-1/2 hover:bg-violet-800 hover:text-white",onClick:()=>{l>1&&a(s=>s-1)},type:"button",children:"-"}),e.jsx("button",{className:"border-2 px-3 py-2 w-1/2 hover:bg-violet-800 hover:text-white",onClick:()=>a(s=>s+1),type:"button",children:"+"})]})]})]}),e.jsxs("label",{className:"my-4 block",children:["Напишите своё ФИО",e.jsx("input",{className:"border-2 block rounded w-full my-2 px-2 py-1",type:"text",placeholder:"Ваше ФИО"})]}),e.jsxs("label",{className:"my-4 block",children:["Напишите адрес доставки",e.jsx("input",{className:"border-2 block rounded w-full my-2 px-2 py-1",type:"text",placeholder:"Ваш адрес"})]}),e.jsxs("label",{className:"my-4 block",children:["Выберите способ доставки:",e.jsxs("label",{className:"block mt-2",children:["Почта",e.jsx("input",{className:"ml-2",type:"radio",name:"dost"})]}),e.jsxs("label",{className:"block",children:["Курьер",e.jsx("input",{className:"ml-2",type:"radio",name:"dost",checked:!0})]}),e.jsxs("label",{className:"block",children:["Самовывоз",e.jsx("input",{className:"ml-2",type:"radio",name:"dost"})]}),e.jsxs("label",{className:"block",children:["СДЭК",e.jsx("input",{className:"ml-2",type:"radio",name:"dost"})]})]}),e.jsxs("label",{className:"my-4 block",children:["Выберите способ оплаты:",e.jsxs("label",{className:"block",children:["Наличными",e.jsx("input",{className:"ml-2",type:"radio",name:"opl"})]}),e.jsxs("label",{className:"block",children:["Картой онлайн",e.jsx("input",{className:"ml-2",type:"radio",name:"opl",checked:!0})]})]}),e.jsxs("p",{children:["Количество товаров: ",e.jsx("span",{className:"text-violet-800 font-medium",children:l})," шт."]}),e.jsxs("p",{className:"mt-2",children:["Итого: ",e.jsx("span",{className:"text-violet-800 font-medium",children:t.price*l})," Р."]}),e.jsx("button",{className:"px-3 py-1 mt-4 mb-6 rounded text-white bg-violet-800 hover:bg-violet-600",children:"Оплатить"})]})]})};export{x as default};
