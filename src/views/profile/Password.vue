<template>
    <div class="pb-20 pt-20">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
            <form @submit.prevent="updatePassword" method="POST">
                <div class="bg-white p-3 rounded-md shadow-md">
                    <div class="grid grid-cols-1 gap-4">
                        <div class="mb-2">
                            <label class="mt-2">Password Baru</label>
                            <input type="password"
                                class="mt-2 appearance-none w-full bg-gray-200 rounded h-7 shadow-sm placeholder-gray-700 focus:outline-none focus:placeholder-gray-600 focus:bg-gray-300 focus-within:text-gray-600 p-5"
                                placeholder="Password Baru" v-model="user.password">
                        </div>
                        <div class="mb-2">
                            <label class="mt-2">Konfirmasi Password Baru</label>
                            <input type="password"
                                class="mt-2 appearance-none w-full bg-gray-200 rounded h-7 shadow-sm placeholder-gray-700 focus:outline-none focus:placeholder-gray-600 focus:bg-gray-300 focus-within:text-gray-600 p-5"
                                placeholder="Konfirmasi Password Baru" v-model="user.password_confirmation">
                        </div>
                        <div>
                            <button type="submit"
                                class="mt-3 bg-gray-700 text-white p-2 w-full rounded-md shadow-md focus:outline-none">
                                UPDATE PASSWORD
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { useProfileStore } from '../../stores/profile'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
export default {
    setup() {

        const store = useProfileStore()
        const router = useRouter()
        const toast = useToast()

        const user = reactive({
            password: '',
            password_confirmation: ''
        })
        const validation = ref([])

        function updatePassword() {
            store.updatePassword({
                password: user.password,
                password_confirmation: user.password_confirmation
            }).then(() => {
                toast.success('Password Behasil Diupdate')
                router.push({ name: 'dashboard' })
            }).catch((error) => {
                validation.value = error
                if (validation.value.password) {
                    toast.error(`${validation.value.password[0]}`)
                }
            });
        }

        return {
            user,
            validation,
            updatePassword
        }
    }
}
</script>

<style>

</style>