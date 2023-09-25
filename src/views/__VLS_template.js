import TheCities from '../components/TheCities.vue';
import TheMap from '../components/TheMap.vue';
import TheMenuBar from '../components/TheMenuBar.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './CityView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'scroll-container'?: boolean; } &
{ 'scroll-container'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'TheMenuBar', typeof __VLS_localComponents, "TheMenuBar", "TheMenuBar", "TheMenuBar"> &
__VLS_WithComponent<'RouterLink', typeof __VLS_localComponents, "RouterLink", "routerLink", "router-link"> &
__VLS_WithComponent<'TheCities', typeof __VLS_localComponents, "TheCities", "TheCities", "TheCities"> &
__VLS_WithComponent<'TheMap', typeof __VLS_localComponents, "TheMap", "TheMap", "TheMap">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.TheMenuBar;
// @ts-ignore
[TheMenuBar,];
__VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components["router-link"]; __VLS_components["router-link"];
// @ts-ignore
[RouterLink, RouterLink,];
({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i;
__VLS_components.TheCities;
// @ts-ignore
[TheCities,];
__VLS_components.TheMap;
// @ts-ignore
[TheMap,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, id: ("app"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("app"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_elementAsFunctionalComponent(__VLS_4);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{}, id: ("menuContainer"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4, typeof __VLS_6> & Record<string, unknown>) => void)({ ...{}, id: ("menuContainer"), });
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
let __VLS_8!: 'TheMenuBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TheMenuBar : (typeof __VLS_resolvedLocalAndGlobalComponents)['TheMenuBar'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{}, }));
({} as { TheMenuBar: typeof __VLS_8; }).TheMenuBar;
const __VLS_10 = __VLS_9({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_8, typeof __VLS_10> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
}
(__VLS_7.slots!).default;
}
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_14 = __VLS_13({ ...{}, id: ("backLink"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_12, typeof __VLS_14> & Record<string, unknown>) => void)({ ...{}, id: ("backLink"), });
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
let __VLS_16!: 'RouterLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterLink : 'routerLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.routerLink : 'router-link' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['router-link'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterLink'];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, to: ("/"), }));
({} as { RouterLink: typeof __VLS_16; }).RouterLink;
({} as { RouterLink: typeof __VLS_16; }).RouterLink;
const __VLS_18 = __VLS_17({ ...{}, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, to: ("/"), });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_22 = __VLS_21({ ...{}, class: ("fa-solid fa-arrow-left fa-2xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("fa-solid fa-arrow-left fa-2xl"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
}
(__VLS_19.slots!).default;
}
(__VLS_15.slots!).default;
}
{
const __VLS_24 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_26 = __VLS_25({ ...{}, id: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_24, typeof __VLS_26> & Record<string, unknown>) => void)({ ...{}, id: ("container"), });
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
{
const __VLS_28 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_30 = __VLS_29({ ...{}, id: ("leftColumn"), class: ("scroll-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, id: ("leftColumn"), class: ("scroll-container"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
{
let __VLS_32!: 'TheCities' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TheCities : (typeof __VLS_resolvedLocalAndGlobalComponents)['TheCities'];
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{}, travelArray: ((__VLS_ctx.travelArray)), }));
({} as { TheCities: typeof __VLS_32; }).TheCities;
const __VLS_34 = __VLS_33({ ...{}, travelArray: ((__VLS_ctx.travelArray)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_34> & Record<string, unknown>) => void)({ ...{}, travelArray: ((__VLS_ctx.travelArray)), });
const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
}
(__VLS_31.slots!).default;
}
{
const __VLS_36 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_38 = __VLS_37({ ...{}, id: ("rightColumn"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, id: ("rightColumn"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
{
const __VLS_40 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_42 = __VLS_41({ ...{}, id: ("mapContainer"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, id: ("mapContainer"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
{
let __VLS_44!: 'TheMap' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TheMap : (typeof __VLS_resolvedLocalAndGlobalComponents)['TheMap'];
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{}, travelData: ((__VLS_ctx.travelArray)), center: ((__VLS_ctx.center)), zoom: ((9)), }));
({} as { TheMap: typeof __VLS_44; }).TheMap;
const __VLS_46 = __VLS_45({ ...{}, travelData: ((__VLS_ctx.travelArray)), center: ((__VLS_ctx.center)), zoom: ((9)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_44, typeof __VLS_46> & Record<string, unknown>) => void)({ ...{}, travelData: ((__VLS_ctx.travelArray)), center: ((__VLS_ctx.center)), zoom: ((9)), });
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
}
(__VLS_43.slots!).default;
}
(__VLS_39.slots!).default;
}
(__VLS_27.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["fa-solid"];
__VLS_styleScopedClasses["fa-arrow-left"];
__VLS_styleScopedClasses["fa-2xl"];
__VLS_styleScopedClasses["scroll-container"];
}
var __VLS_slots!: {};
// @ts-ignore
[travelArray, travelArray, travelArray, travelArray, center, travelArray, center, travelArray, center,];
return __VLS_slots;
}
