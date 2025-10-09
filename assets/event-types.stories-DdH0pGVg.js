import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-BCtMShv3.js";import{S as o,D as n,W as i,a as c,M as d}from"./month-view-DDLgURUh.js";import{d as y,b as D,c as k}from"./dataSource-UOyZl2xN.js";/* empty css               */const E=({})=>{const s=S.useRef(null),w={dataSource:y,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"schedule-control",children:e.jsxs(o,{ref:s,height:"550px",width:"100%",selectedDate:new Date(2017,10,1),currentView:"Month",allowDragAndDrop:!1,eventSettings:w,children:[e.jsx(n,{}),e.jsx(i,{}),e.jsx(c,{}),e.jsx(d,{})]})})})},T=({})=>{const s={dataSource:D.slice(0,14),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"schedule-control",children:e.jsxs(o,{height:"550px",width:"100%",selectedDate:new Date(2017,10,1),currentView:"Month",eventSettings:s,children:[e.jsx(n,{}),e.jsx(i,{}),e.jsx(c,{}),e.jsx(d,{})]})})})},f=({})=>{const s={dataSource:k,fields:{id:"id",subject:"subject",startTime:"startTime",endTime:"endTime",isAllDay:"isAllDay",location:"location",description:"description",isBlock:"isBlock",isReadonly:"isReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"schedule-control",children:e.jsxs(o,{height:"550px",width:"100%",selectedDate:new Date(2025,6,14),currentView:"Month",eventSettings:s,children:[e.jsx(n,{}),e.jsx(i,{}),e.jsx(c,{}),e.jsx(d,{})]})})})},I={title:"Schedule/Event Types",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},t={render:s=>e.jsx(E,{...s}),args:{height:"550px",width:"100%",viewType:"WeekView"}},r={render:s=>e.jsx(T,{...s}),args:{height:"550px",width:"100%",viewType:"WeekView"}},a={render:s=>e.jsx(f,{...s}),args:{}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <NormalEventsSample {...args} />,
  args: {
    height: '550px',
    width: '100%',
    viewType: 'WeekView'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <BlockEventsSample {...args} />,
  args: {
    height: '550px',
    width: '100%',
    viewType: 'WeekView'
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,g,v;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <CombinedEventsSample {...args} />,
  args: {}
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const W=["NormalEvents","BlockEvents","CombinedEvents"];export{r as BlockEvents,a as CombinedEvents,t as NormalEvents,W as __namedExportsOrder,I as default};
