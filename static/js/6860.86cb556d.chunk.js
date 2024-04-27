(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6860],{57756:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var a=r(484),s=r(72600),i=r(31211),n=r(92813),o=r(95454),c=r(40011),d=r(9762);class h{constructor(e,t){this.record=e,this._store=t}_get_name(){return this.record.readName}_get_start(){return this.record.alignmentStart-1}_get_end(){return this.record.alignmentStart+(this.record.lengthOnRef??1)-1}_get_cram_read_features(){return this.record.readFeatures}_get_type(){return"match"}_get_score(){return this.record.mappingQuality}_get_flags(){return this.record.flags}_get_strand(){return this.record.isReverseComplemented()?-1:1}_read_group_id(){return this._store.samHeader.readGroups?.[this.record.readGroupId]}_get_qual(){return(this.record.qualityScores||[]).join(" ")}qualRaw(){return this.record.qualityScores}_get_refName(){return this._store.refIdToName(this.record.sequenceId)}_get_is_paired(){return!!this.record.mate}_get_pair_orientation(){return this.record.isPaired()?this.record.getPairOrientation():void 0}_get_template_length(){return this.record.templateLength||this.record.templateSize}_get_next_ref(){return this.record.mate?this._store.refIdToName(this.record.mate.sequenceId):void 0}_get_next_segment_position(){return this.record.mate?`${this._store.refIdToName(this.record.mate.sequenceId)}:${this.record.mate.alignmentStart}`:void 0}_get_next_pos(){return this.record.mate?.alignmentStart}_get_tags(){const e=this._read_group_id(),{tags:t}=this.record;return void 0!==e?{...t,RG:e}:t}_get_seq(){return this.record.getReadBases()}_get_CIGAR(){return function(e,t,r,a){let s="",i="",n="M",o=0;if(!a)return"";const c=a.seq,d=a.start;let h=t,g=0,u=0;if(void 0!==e)for(const{code:t,refPos:r,sub:a,data:l}of e)if(g=r-h,s+=c.slice(h-d,r-d),h=r,u>0&&g&&(i+=`${u}I`,u=0),o&&"M"!==n&&(i+=`${o}${n}`,o=0),g&&(n="M",o+=g),"b"===t){const e=l.split(","),t=String.fromCharCode(...e);s+=t,h+=t.length,o+=t.length}else"B"===t||"X"===t?(s+=a,h++,o++):"D"===t||"N"===t?(h+=l,o&&(i+=`${o}${n}`),i+=l+t,o=0):"I"===t||"S"===t?(s+=l,o&&(i+=`${o}${n}`),i+=l.length+t,o=0):"i"===t?(o&&(i+=`${o}${n}`),u++,s+=l,o=0):"P"===t?(o&&(i+=`${o}${n}`),i+=`${l}P`):"H"===t&&(o&&(i+=`${o}${n}`),i+=`${l}H`,o=0);else g=r-s.length;return s.length!==r&&(g=r-s.length,s+=c.slice(h-d,h-d+g),o&&"M"!==n&&(i+=`${o}${n}`,o=0),n="M",o+=g),g&&u>0&&(i+=`${u}I`),o&&(i+=`${o}${n}`),i}(this.record.readFeatures,this.record.alignmentStart,this.record.readLength,this.record._refRegion)}tags(){return Object.getOwnPropertyNames(h.prototype).filter((e=>e.startsWith("_get_")&&"_get_mismatches"!==e&&"_get_cram_read_features"!==e)).map((e=>e.replace("_get_","")))}id(){return`${this._store.id}-${this.record.uniqueId}`}get(e){const t=`_get_${e}`;if(this[t])return this[t]()}parent(){}children(){}set(){}pairedFeature(){return!1}_get_clipPos(){const e=this.get("mismatches");if(e.length){const t=-1===this.get("strand")?e.at(-1):e[0],{type:r,cliplen:a}=t;if("softclip"===r||"hardclip"===r)return a}return 0}toJSON(){return{...Object.fromEntries(this.tags().map((e=>[e,this.get(e)])).filter((e=>void 0!==e[1]))),uniqueId:this.id()}}_get_mismatches(){const e=this.record.readFeatures,t=this.qualRaw();return function(e,t,r){if(!e)return[];const a=new Array(e.length);let s=0,i=0,n=0,o=0,c=t;for(const{refPos:d,code:h,pos:g,data:u,sub:l,ref:m}of e)if(o=n-c,c=n,o&&i>0&&(a[s++]={start:n,type:"insertion",base:`${i}`,length:0},i=0),n=d-1-t,"X"===h)a[s++]={start:n,length:1,base:l,qual:r?.[g-1],altbase:m?.toUpperCase(),type:"mismatch"};else if("I"===h)a[s++]={start:n,type:"insertion",base:`${u.length}`,length:0};else if("N"===h)a[s++]={type:"skip",length:u,start:n,base:"N"};else if("S"===h){const e=u.length;a[s++]={start:n,type:"softclip",base:`S${e}`,cliplen:e,length:1}}else if("P"===h);else if("H"===h){const e=u;a[s++]={start:n,type:"hardclip",base:`H${e}`,cliplen:e,length:1}}else"D"===h?a[s++]={type:"deletion",length:u,start:n,base:"*"}:"b"===h||"q"===h||"B"===h||"i"===h&&i++;return o&&i>0&&(a[s++]={start:n,type:"insertion",base:`${i}`,length:0},i=0),a.slice(0,s)}(e,this.get("start"),t)}}class g extends s.BaseFeatureDataAdapter{samHeader={};seqIdToOriginalRefName=[];async configurePre(){const e=this.getConf("cramLocation"),t=this.getConf("craiLocation");if(!e)throw new Error("missing cramLocation argument");if(!t)throw new Error("missing craiLocation argument");const r=this.pluginManager,s=new a.ED({cramFilehandle:(0,n.openLocation)(e,r),index:new a.lr({filehandle:(0,n.openLocation)(t,r)}),seqFetch:(...e)=>this.seqFetch(...e),checkSequenceMD5:!1,fetchSizeLimit:2e8});if(!this.getSubAdapter)throw new Error("Error getting subadapter");const i=this.getConf("sequenceAdapter");return{cram:s,sequenceAdapter:(await this.getSubAdapter(i)).dataAdapter}}async configure(){return this.configureP||(this.configureP=this.configurePre().catch((e=>{throw this.configureP=void 0,e}))),this.configureP}async getHeader(e){const{cram:t}=await this.configure();return t.cram.getHeaderText()}async seqFetch(e,t,r){t-=1;const{sequenceAdapter:a}=await this.configure(),s=this.refIdToOriginalName(e)||this.refIdToName(e);if(!s)throw new Error("unknown");const i=(await(0,d.z)(a.getFeatures({refName:s,start:t,end:r,assemblyName:""}).pipe((0,c.q)()))).sort(((e,t)=>e.get("start")-t.get("start"))).map((e=>{const a=e.get("start"),s=e.get("end"),i=Math.max(t-a,0),n=Math.min(r-a,s-a)-i;return(e.get("seq")||e.get("residues")).slice(i,i+n)})).join("");if(i.length!==r-t)throw new Error(`sequence fetch failed: fetching ${s}:${(t-1).toLocaleString()}-${r.toLocaleString()} returned ${i.length.toLocaleString()} bases, but should have returned ${(r-t).toLocaleString()}`);return i}async setupPre(e){const{statusCallback:t=(()=>{})}=e||{};return(0,i.updateStatus)("Downloading index",t,(async()=>{const e=await this.configure(),{cram:t}=e,r=await t.cram.getSamHeader(),a=[],s={};r.filter((e=>"SQ"===e.tag)).forEach(((e,t)=>{e.data.forEach((e=>{if("SN"===e.tag){const r=e.value;s[r]=t,a[t]=r}}))}));const i=r.filter((e=>"RG"===e.tag)).map((e=>e.data.find((e=>"ID"===e.tag))?.value)),n={idToName:a,nameToId:s,readGroups:i};return this.samHeader=n,{samHeader:n,...e}}))}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRefNames(e){const{samHeader:t}=await this.setup(e);if(!t.idToName)throw new Error("CRAM file has no header lines");return t.idToName}refNameToId(e){return this.samHeader.nameToId?this.samHeader.nameToId[e]:this.seqIdToRefName?this.seqIdToRefName.indexOf(e):void 0}refIdToName(e){return this.samHeader.idToName?.[e]||this.seqIdToRefName?.[e]}refIdToOriginalName(e){return this.seqIdToOriginalRefName[e]}getFeatures(e,t){const{signal:r,filterBy:a,statusCallback:s=(()=>{})}=t||{},{refName:n,start:c,end:d,originalRefName:h}=e;return(0,o.ObservableCreate)((async e=>{const{cram:o}=await this.setup(t),g=this.refNameToId(n);if(void 0===g)return console.warn("Unknown refName",n),void e.complete();h&&(this.seqIdToOriginalRefName[g]=h);const u=await(0,i.updateStatus)("Downloading alignments",s,(()=>o.getRecordsForRange(g,c,d)));(0,i.checkAbortSignal)(r),await(0,i.updateStatus)("Processing alignments",s,(()=>{const{flagInclude:t=0,flagExclude:r=0,tagFilter:s,readName:i}=a||{};for(const a of u){const n=a.flags;if((n&t)===t||n&r){if(s){const e="RG"===s.tag?this.samHeader.readGroups?.[a.readGroupId]:a.tags[s.tag];if(!("*"===e?void 0!==e:`${e}`===s.value))continue}i&&a.readName!==i||e.next(this.cramRecordToFeature(a))}}e.complete()}))}),r)}freeResources(){}cramRecordToFeature(e){return new h(e,this)}async getMultiRegionFeatureDensityStats(e,t){return{bytes:await this.bytesForRegions(e,t),fetchSizeLimit:this.getConf("fetchSizeLimit")}}async bytesForRegions(e,t){const{cram:r}=await this.configure();return(await Promise.all(e.map((e=>{const{refName:t,start:a,end:s}=e,i=this.refNameToId(t);return void 0!==i?r.index.getEntriesForRange(i,a,s):[{sliceBytes:0}]})))).flat().reduce(((e,t)=>e+t.sliceBytes),0)}}},53260:()=>{},64638:()=>{}}]);
//# sourceMappingURL=6860.86cb556d.chunk.js.map