"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4777],{14777:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s(72600),a=s(92813);const n=class extends r.BaseAdapter{async setupPre(){const e=this.pluginManager,t=(0,a.openLocation)(this.getConf("chromSizesLocation"),e),s=await t.readFile("utf8");return Object.fromEntries(s.split(/\n|\r\n|\r/).map((e=>e.trim())).filter((e=>!!e)).map((e=>{const[t,s]=e.split("\t");return[t,+s]})))}async setup(){return this.setupP||(this.setupP=this.setupPre().catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRegions(){const e=await this.setup();return Object.keys(e).map((t=>({refName:t,start:0,end:e[t]})))}getHeader(){return{}}freeResources(){}}}}]);
//# sourceMappingURL=4777.b2d4efe9.chunk.js.map