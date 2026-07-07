import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,l as n,n as r,o as i,s as a,t as o}from"./Smarpy-3Wt67r4F.js";import{t as s}from"./Hamburger-BX3m61SP.js";import{C as c,D as l,E as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,g as v,i as y,m as b,n as x,p as S,s as C,t as w,u as T,y as E}from"./NavStatic-C6aeRDFC.js";var D,O,k,A;e((()=>{o(),l(),d(),E(),v(),S(),T(),C(),y(),w(),u(),a(),D={title:`Components/Nav`,component:f,tags:[`autodocs`],argTypes:{colorName:{control:`text`}}},O=n(i,{children:[t(m,{as:`a`,href:`/`,children:`NavMenuItem1`}),t(m,{as:`a`,href:`/`,children:`NavMenuItem2`}),t(m,{as:`a`,href:`/`,children:`NavMenuItem3`})]}),k={args:{},render:e=>t(r,{children:n(f,{...e,children:[n(c,{isTabletOrLess:!0,children:[n(h,{children:[t(b,{children:t(s,{})}),t(p,{children:`Center`}),t(_,{})]}),t(g,{isActive:!0,children:O})]}),n(x,{isDesktopOrMore:!0,children:[n(h,{children:[t(b,{children:`NavBrandLeft`}),t(p,{children:`NavBrandCenter`}),t(_,{children:`NavBrandRight`})]}),t(g,{children:O})]})]})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <Nav {...props}>
        <NavAccordion isTabletOrLess>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger />
            </NavBrandLeft>
            <NavBrandCenter>{"Center"}</NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu isActive={true}>{navMenuItems}</NavMenu>
        </NavAccordion>
        <NavStatic isDesktopOrMore>
          <NavBrand>
            <NavBrandLeft>{"NavBrandLeft"}</NavBrandLeft>
            <NavBrandCenter>{"NavBrandCenter"}</NavBrandCenter>
            <NavBrandRight>{"NavBrandRight"}</NavBrandRight>
          </NavBrand>
          <NavMenu>{navMenuItems}</NavMenu>
        </NavStatic>
      </Nav>
    </Smarpy>
}`,...k.parameters?.docs?.source}}},A=[`Plain`]}))();export{k as Plain,A as __namedExportsOrder,D as default};