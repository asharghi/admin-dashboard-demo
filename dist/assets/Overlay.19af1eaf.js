import{P as E}from"./ProductService.0d2a1d0b.js";import{u as F,r as a,x as M,y as G,o as H,b as r,z as J,c as K,d as Q,e,f as t,g as s,A as D,j as W,i as X,t as ee}from"./index.ea7f8afd.js";const te="/sakai-vue/demo/images/nature/nature9.jpg",oe={class:"grid"},ie={class:"col-12 lg:col-6"},le={class:"card p-fluid"},se=e("h5",null,"Dialog",-1),ne=e("p",{class:"line-height-3 m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ae={class:"card p-fluid"},re=e("h5",null,"Overlay Panel",-1),ce={class:"flex flex-wrap gap-2"},ue=e("img",{src:te,alt:"Nature 9"},null,-1),de=["src","alt"],pe={class:"col-12 lg:col-6"},me={class:"card p-fluid"},ve=e("h5",null,"Confirmation",-1),fe=e("div",{class:"flex align-items-center justify-content-center"},[e("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),e("span",null,"Are you sure you want to proceed?")],-1),be={class:"card"},_e=e("h5",null,"Sidebar",-1),ge=e("h1",{style:{"font-weight":"normal"}},"Left Sidebar",-1),he=e("h1",{style:{"font-weight":"normal"}},"Right Sidebar",-1),ye=e("h1",{style:{"font-weight":"normal"}},"Top Sidebar",-1),we=e("h1",{style:{"font-weight":"normal"}},"Bottom Sidebar",-1),Ce=e("h1",{style:{"font-weight":"normal"}},"Full Screen",-1),xe={class:"col-12 lg:col-6"},ke={class:"card"},Se=e("h5",null,"Tooltip",-1),Te={class:"formgroup-inline"},De={class:"field"},Pe={class:"col-12 lg:col-6"},Ue={class:"card"},Ie=e("h5",null,"ConfirmPopup",-1),Le={__name:"Overlay",setup(Be){const{contextPath:P}=F(),u=a(!1),d=a(!1),p=a(!1),m=a(!1),v=a(!1),f=a(!1),b=a(!1),y=a(null),w=a(null),_=a(null),C=a(null),U=a(null),I=new E,g=M(),B=G();H(()=>{I.getProductsSmall().then(n=>y.value=n)});const j=()=>{u.value=!0},q=()=>{u.value=!1},L=()=>{d.value=!0},x=()=>{d.value=!1},N=n=>{_.value.toggle(n)},O=n=>{C.value.toggle(n)},Z=n=>n.toLocaleString("en-US",{style:"currency",currency:"USD"}),$=n=>{_.value.hide(),g.add({severity:"info",summary:"Product Selected",detail:n.data.name,life:3e3})},R=n=>{B.require({target:n.target,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{g.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{g.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})};return(n,o)=>{const l=r("Button"),k=r("Dialog"),S=r("OverlayPanel"),h=r("Column"),Y=r("DataTable"),c=r("Sidebar"),A=r("InputText"),V=r("ConfirmPopup"),z=r("Toast"),T=J("tooltip");return K(),Q("div",oe,[e("div",ie,[e("div",le,[se,t(k,{header:"Dialog",visible:u.value,"onUpdate:visible":o[0]||(o[0]=i=>u.value=i),breakpoints:{"960px":"75vw"},style:{width:"30vw"},modal:!0},{footer:s(()=>[t(l,{label:"Ok",onClick:q,icon:"pi pi-check",class:"p-button-outlined"})]),default:s(()=>[ne]),_:1},8,["visible"]),t(l,{label:"Show",icon:"pi pi-external-link",style:{width:"auto"},onClick:j})]),e("div",ae,[re,e("div",ce,[e("div",null,[t(l,{type:"button",label:"Image",onClick:N,class:"p-button-success"}),t(S,{ref_key:"op",ref:_,appendTo:"body",showCloseIcon:!0},{default:s(()=>[ue]),_:1},512)]),e("div",null,[t(l,{type:"button",label:"DataTable",onClick:O,class:"p-button-success"}),t(S,{ref_key:"op2",ref:C,appendTo:"body",showCloseIcon:!0,id:"overlay_panel",style:{width:"450px"}},{default:s(()=>[t(Y,{value:y.value,selection:w.value,"onUpdate:selection":o[1]||(o[1]=i=>w.value=i),selectionMode:"single",paginator:!0,rows:5,onRowSelect:$,responsiveLayout:"scroll"},{default:s(()=>[t(h,{field:"name",header:"Name",sortable:!0,headerStyle:"min-width:12rem;"}),t(h,{header:"Image",headerStyle:"min-width:5rem;"},{body:s(i=>[e("img",{src:W(P)+"demo/images/product/"+i.data.image,alt:i.data.image,width:"50",class:"shadow-2"},null,8,de)]),_:1}),t(h,{field:"price",header:"Price",sortable:!0,headerStyle:"min-width:8rem;"},{body:s(i=>[X(ee(Z(i.data.price)),1)]),_:1})]),_:1},8,["value","selection"])]),_:1},512)])])])]),e("div",pe,[e("div",me,[ve,t(l,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",style:{width:"auto"},onClick:L}),t(k,{header:"Confirmation",visible:d.value,"onUpdate:visible":o[2]||(o[2]=i=>d.value=i),style:{width:"350px"},modal:!0},{footer:s(()=>[t(l,{label:"No",icon:"pi pi-times",onClick:x,class:"p-button-text"}),t(l,{label:"Yes",icon:"pi pi-check",onClick:x,class:"p-button-text",autofocus:""})]),default:s(()=>[fe]),_:1},8,["visible"])]),e("div",be,[_e,t(c,{visible:p.value,"onUpdate:visible":o[3]||(o[3]=i=>p.value=i),baseZIndex:1e3},{default:s(()=>[ge]),_:1},8,["visible"]),t(c,{visible:m.value,"onUpdate:visible":o[4]||(o[4]=i=>m.value=i),baseZIndex:1e3,position:"right"},{default:s(()=>[he]),_:1},8,["visible"]),t(c,{visible:v.value,"onUpdate:visible":o[5]||(o[5]=i=>v.value=i),baseZIndex:1e3,position:"top"},{default:s(()=>[ye]),_:1},8,["visible"]),t(c,{visible:f.value,"onUpdate:visible":o[6]||(o[6]=i=>f.value=i),baseZIndex:1e3,position:"bottom"},{default:s(()=>[we]),_:1},8,["visible"]),t(c,{visible:b.value,"onUpdate:visible":o[7]||(o[7]=i=>b.value=i),baseZIndex:1e3,position:"full"},{default:s(()=>[Ce]),_:1},8,["visible"]),t(l,{icon:"pi pi-arrow-right",class:"p-button-warning",onClick:o[8]||(o[8]=i=>p.value=!0),style:{"margin-right":"0.25em"}}),t(l,{icon:"pi pi-arrow-left",class:"p-button-warning",onClick:o[9]||(o[9]=i=>m.value=!0),style:{"margin-right":"0.25em"}}),t(l,{icon:"pi pi-arrow-down",class:"p-button-warning",onClick:o[10]||(o[10]=i=>v.value=!0),style:{"margin-right":"0.25em"}}),t(l,{icon:"pi pi-arrow-up",class:"p-button-warning",onClick:o[11]||(o[11]=i=>f.value=!0),style:{"margin-right":"0.25em"}}),t(l,{icon:"pi pi-external-link",class:"p-button-warning",onClick:o[12]||(o[12]=i=>b.value=!0)})])]),e("div",xe,[e("div",ke,[Se,e("div",Te,[e("div",De,[D(t(A,{type:"text",placeholder:"Username"},null,512),[[T,"Your username"]])]),D(t(l,{type:"button",label:"Save",icon:"pi pi-check"},null,512),[[T,"Click to proceed"]])])])]),e("div",Pe,[e("div",Ue,[Ie,t(V),t(z),t(l,{ref_key:"popup",ref:U,onClick:o[13]||(o[13]=i=>R(i)),icon:"pi pi-check",label:"Confirm",class:"mr-2"},null,512)])])])}}};export{Le as default};
