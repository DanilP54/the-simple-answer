import{C as g,R as m,j as s,D as j,E as c,F as n,L as w}from"./index-3IwxsWdS.js";import{u as y,a as l,s as o,F as i,b as C}from"./Form.module-DqLIOXCY.js";const S=()=>{const{sign_up:p}=g(),[h,t]=m.useState(!1),[f,d]=m.useState(!1),{isLoading:v,sendRequest:x,errorResponse:u}=y(),e=l("",{pattern:/.+@.+\..+/i,isEmpty:!0}),a=l("",{pattern:/.{5,}/,isEmpty:!0}),r=l("",{isEmpty:!0}),E=()=>{if(e.validateError||a.validateError)return t(!0);if(a.value!==r.value)return t(!1),d(!0);t(!1),d(!1),x(p,"/",e.value,a.value)};return s.jsxs(s.Fragment,{children:[v&&s.jsx(j,{}),s.jsx(c,{variant:"h4",className:o.title,children:"Sign Up"}),h&&s.jsx(n,{children:"Email must be valid and password must be at least 5 characters long"}),f&&s.jsx(n,{children:"Password does not match confirmation"}),!!u&&s.jsx(n,{children:u}),s.jsxs("form",{className:o.form,children:[s.jsx(i,{onChange:e.onChange,value:e.value,type:"email",name:"email",label:"Email adress",size:"small",variant:"filled",size:"small"}),s.jsx(i,{onChange:a.onChange,value:a.value,type:"password",name:"password",label:"Password",size:"small",variant:"filled",size:"small"}),s.jsx(i,{onChange:r.onChange,value:r.value,type:"password",name:"password",label:"Confirum Password",size:"small",variant:"filled"}),s.jsx(C,{onClick:E,disabled:e.isEmpty||a.isEmpty||r.isEmpty,variant:"outlined",children:"Sign Up"})]}),s.jsx("div",{className:o.form__links,children:s.jsxs(c,{variant:"span",children:["Already have an account?",s.jsx(w,{to:"/register",children:" Log In"})]})})]})};export{S as default};
