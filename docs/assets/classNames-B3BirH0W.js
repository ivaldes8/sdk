const f=(...n)=>{const t=[];return n.forEach(r=>{if(r!==void 0){if(typeof r=="string")return t.push(r);Object.keys(r).forEach(o=>{r[o]&&t.push(o)})}}),t.join(" ")};export{f as c};
