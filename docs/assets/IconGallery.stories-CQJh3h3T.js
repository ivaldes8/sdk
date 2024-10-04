import{j as s}from"./jsx-runtime-DEdD30eg.js";import{I as t,i as l}from"./Icon-DU6Ag5An.js";import"./index-RYns6xqu.js";import"./classNames-B3BirH0W.js";const d="_gallery_1bqfc_2",p="_iconCard_1bqfc_10",y="_iconName_1bqfc_25",a={gallery:d,iconCard:p,iconName:y},j={title:"Atoms/IconGallery",component:t,parameters:{layout:"fullscreen"}},e={render:i=>s.jsx("div",{className:a.gallery,children:Object.keys(l).map(n=>{const{icon:u,...m}=i;return s.jsxs("div",{className:a.iconCard,children:[s.jsx(t,{icon:n,size:"medium",...m}),s.jsx("span",{className:a.iconName,children:n})]},n)})})};var r,c,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <div className={styles.gallery}>
      {Object.keys(icons).map(iconName => {
      const {
        icon,
        ...restArgs
      } = args;
      return <div key={iconName} className={styles.iconCard}>
            <Icon icon={iconName as Icons} size="medium" {...restArgs} />
            <span className={styles.iconName}>{iconName}</span>
          </div>;
    })}
    </div>
}`,...(o=(c=e.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,j as default};
