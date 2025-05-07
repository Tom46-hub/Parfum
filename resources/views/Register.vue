<template>
    <div>
        <h2>Inscription</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nom</label>
                <input type="text" v-model="form.name" required />
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="form.email" required />
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input type="password" v-model="form.password" required />
            </div>
            <div>
                <label for="password_confirmation"
                    >Confirmer le mot de passe</label
                >
                <input
                    type="password"
                    v-model="form.password_confirmation"
                    required
                />
            </div>
            <button type="submit">S'inscrire</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                await this.$inertia.post("/register", this.form); // Soumettre le formulaire à Laravel
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style scoped>
/* Tu peux ajouter des styles ici */
</style>
