<template>
    <div class="pb-20 pt-20">
        <div class="container mx-auto grid grid-cols-1 p-5 sm:w-full md:w-5/12">

            <form @submit.prevent="login">
                <div class="bg-white rounded-md shadow-md p-5">
                    <div class="text-xl">
                        LOGIN AKUN
                    </div>
                    <div class="border-2 border-gray-200 mt-3 mb-2"></div>

                    <div class="mb-2">
                        <label class="mt-2">Email</label>
                        <input type="text" v-model="user.email"
                            class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
                            placeholder="Masukan Email">
                    </div>

                    <div class="cols-span-1 mb-5">
                        <label class="mt-2">Password</label>
                        <input type="password" v-model="user.password"
                            class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
                            placeholder="Password">
                    </div>

                    <div>
                        <button
                            class="bg-gray-700 py-1 px-3 text-white rounded-md shadow-md text-xl inline-block w-full focus:outline-none focus:bg-gray-900">MASUK</button>
                    </div>

                </div>
            </form>

            <div class="text-center mt-5">
                Belem punya akun ? <router-link :to="{ name: 'register' }" class="underline text-blue-600">Masuk Disini
                    !</router-link>
            </div>

        </div>
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import { useAuthStore } from '@/stores/auth'
import { useToast } from "vue-toastification"
import { useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
export default {
    setup() {
        const user = reactive({
            email: '',
            password: '',
        })
        const validation = ref([])
        const store = useAuthStore()
        const toast = useToast()
        const router = useRouter()


        function login() {
            store.login({
                email: user.email,
                password: user.password
            }).then(() => {
                router.push({ name: 'dashboard' })
                toast.success("Login Berhasil!")
            }).catch((error) => {
                validation.value = error

                if (validation.value.email) {
                    toast.error(`${validation.value.email[0]}`)
                }

                //show validation password with toast
                if (validation.value.password) {
                    toast.error(`${validation.value.password[0]}`)
                }

                //show login failed
                if (validation.value.message) {
                    toast.error(`${validation.value.message}`)
                }
            });
        }

        return {
            user,
            validation,
            login
        }
    }
}
</script>

<style>

</style>