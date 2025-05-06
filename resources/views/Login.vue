<template>
    <div>
        <h2>Connexion</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="form.email" required />
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input type="password" v-model="form.password" required />
            </div>
            <div>
                <label for="remember">
                    <input type="checkbox" v-model="form.remember" /> Se
                    souvenir de moi
                </label>
            </div>
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
                remember: false,
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                await this.$inertia.post("/login", this.form); // Soumettre le formulaire à Laravel
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
