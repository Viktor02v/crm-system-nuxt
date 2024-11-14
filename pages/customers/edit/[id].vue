<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { COLLECTION_CUSTOMERS, DB_ID, STORAGE_ID } from '@/utils/app.constants';
import type { ICustomer } from '~/types/deals.types';

interface ICustomerFormState
	extends Pick<ICustomer, 'avatar_url' | 'email' | 'name' | 'from_source'> { }

useSeoMeta({
	title: `Company Editing | CRM System`,
})

const route = useRoute()
const customerId = route.params.id as string

const { handleSubmit, defineField, setFieldValue, setValues, values } =
	useForm<ICustomerFormState>()

const { data, isSuccess } = useQuery({
	queryKey: ['getCustomer', customerId],
	queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId),
})

watch(isSuccess, () => {
	const initialData = data.value as unknown as ICustomerFormState
	setValues({
		email: initialData.email,
		avatar_url: initialData.avatar_url,
		from_source: initialData.from_source || '',
		name: initialData.name,
	})
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [fromSource, fromSourceAttrs] = defineField('from_source')

const { mutate, isPending } = useMutation({
	mutationKey: ['update customer', customerId],
	mutationFn: (data: ICustomerFormState) =>
		DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data),
})

const onSubmit = handleSubmit(values => {
	mutate(values)
})
</script>

<template>
	<div>

	</div>
</template>

<style scoped>

</style>