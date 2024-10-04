import{j as b}from"./jsx-runtime-DEdD30eg.js";import{c as q}from"./classNames-B3BirH0W.js";import"./index-RYns6xqu.js";const C="_alert_130sj_1",c={alert:C,"alert--primary":"_alert--primary_130sj_7","alert--secondary":"_alert--secondary_130sj_12","alert--danger":"_alert--danger_130sj_17","alert--success":"_alert--success_130sj_22","alert--info":"_alert--info_130sj_27","alert--warning":"_alert--warning_130sj_32"},i=({children:o,className:D,type:I="primary",...P})=>{if(!o)return null;const V={className:q(c.alert,c[`alert--${I}`],"mz-btn",D),...P};return b.jsx("div",{...V,children:o})};try{i.displayName="Alert",i.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"info"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Atoms/Alert",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","secondary","warning","danger","success","info"],description:"Defines the alert type.",table:{type:{summary:"primary | secondary | warning | danger | success | info"},defaultValue:{summary:"primary"}}},className:{control:"text",description:"Additional CSS classes."},children:{control:"text",description:"Content of the alert."}}},e={args:{type:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},r={args:{type:"secondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},s={args:{type:"warning",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},a={args:{type:"danger",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},t={args:{type:"success",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},n={args:{type:"info",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "primary",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,_,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "warning",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var h,L,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "danger",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}`,...(S=(L=a.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var j,v,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "success",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,N,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "info",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}`,...(A=(N=n.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const R=["Primary","Secondary","Warning","Danger","Success","Info"];export{a as Danger,n as Info,e as Primary,r as Secondary,t as Success,s as Warning,R as __namedExportsOrder,O as default};
