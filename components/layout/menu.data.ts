export interface IMenuItem {
	name:string
	url:string
	icon:string
}

export const MENU_DATA: IMenuItem[] = [{
	icon: 'radix-icons:dashboard',
	name:'Home',
	url:'/'
},
{
	icon: 'ep:goods',
	name:'Products',
	url:'/products'
},
{
	icon: 'ph:contactless-payment',
	name:'Payments',
	url:'/payments'
},
{
	icon: 'fluent:receipt-28-regular',
	name:'Customers',
	url:'/customers'
},
{
	icon: 'mingcute:group-line',
	name:'Orders',
	url:'/orders'
},
{
	icon: 'fluent:person-feedback-48-regular',
	name:'Feedback',
	url:'/feedback'
},
{
	icon: 'radix-icons:gear',
	name:'Settings',
	url:'/settings'
},
{
	icon: 'radix-icons:question-mark',
	name:'Help center',
	url:'/help'
}
]