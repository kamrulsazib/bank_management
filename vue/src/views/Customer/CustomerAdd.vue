<template>
    <section class="container">
        <div class="container card">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card-header mt-5">
                        <h4 class="table_heading text-center">Customer Sign Up</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Account Number</label>
                                        <input type="text" v-model="account_number" class="form-control" id="name"
                                            placeholder="Enter Your Name" readonly>
                                        <p style="color:red" v-if="nameError">
                                            {{ nameError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" v-model="name" class="form-control" id="name"
                                            placeholder="Enter Your Name">
                                        <p style="color:red" v-if="nameError">
                                            {{ nameError }}
                                        </p>
                                    </div>

                                </div>
                                
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" v-model="email" class="form-control" id="email"
                                            placeholder="Enter Your Email">
                                        <p style="color:red" v-if="emailError">
                                            {{ emailError }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="text" v-model="phone" class="form-control" id="phone"
                                            placeholder="Enter Your Mobile">
                                        <p style="color:red" v-if="phoneError">
                                            {{ phoneError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text" v-model="address" class="form-control" id="address"
                                            placeholder="Enter Your address">
                                        <p style="color:red" v-if="addressError">
                                            {{ addressError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nidNumber" class="form-label">NID Number</label>
                                        <input type="text" v-model="nidNumber" class="form-control" id="nidNumber"
                                            placeholder="Enter Your NID Number">
                                        <p style="color:red" v-if="nidNumberError">
                                            {{ nidNumberError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="date" class="form-label">Date of Birth</label>
                                        <input type="date" v-model="date" class="form-control" id="date"
                                            placeholder="Enter Your date">
                                        <p style="color:red" v-if="dateError">
                                            {{ dateError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineeName" class="form-label">Nominee Name</label>
                                        <input type="text" v-model="nomineeName" class="form-control" id="nomineeName"
                                            placeholder="Enter Nominee Name">
                                        <p style="color:red" v-if="nomineeNameError">
                                            {{ nomineeNameError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineePhone" class="form-label">Nominee Phone</label>
                                        <input type="text" v-model="nomineePhone" class="form-control" id="nomineePhone"
                                            placeholder="Enter Nominee Mobile Number">
                                        <p style="color:red" v-if="nomineePhoneError">
                                            {{ nomineePhoneError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineeNID" class="form-label">Nominee NID</label>
                                        <input type="text" v-model="nomineeNID" class="form-control" id="nomineeNID"
                                            placeholder="Enter Nominee NID">
                                        <p style="color:red" v-if="nomineeNIDError">
                                            {{ nomineeNIDError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="document" class="form-label">Document</label>
                                        <input type="text" v-model="document" class="form-control" id="document"
                                            placeholder="Enter Your Document">
                                        <p style="color:red" v-if="documentError">
                                            {{ documentError }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nomineeNid" class="form-label">Account Type</label>
                                        <select class="form-select" v-model="selectedAccountType"
                                            aria-label="Default select example">
                                            <option disabled value="">Please select an account type</option>
                                            <option v-for="(d, i) in accountType" :key="i" :value="d.id">
                                                {{ d.account_type }}</option>

                                        </select>
                                        <p style="color:red" v-if="accountTypeError">
                                            {{ accountTypeError }}
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="formFileMultiple" class="form-label">Image</label>
                                        <input class="form-control" type="file" id="formFileMultiple"
                                            @change="handleImageUpload">
                                        <p style="color:red" v-if="imageError">
                                            {{ imageError }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" v-model="password" class="form-control" id="password"
                                            placeholder="********">
                                        <p style="color:red" v-if="passwordError">
                                            {{ passwordError }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <button type="submit" @click="savaCustomer"
                                            class="btn btn-primary form-control mt-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import bcrypt from 'bcryptjs';
import axios from 'axios'
export default {
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/customer',
            accountType: '',
            selectedAccountType: '',
            account_number: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            nidNumber: '',
            date: '',
            nomineeName: '',
            nomineePhone: '',
            nomineeNID: '',
            document: '',
            photo: null,
            imageError: '',
            nameError: '',
            emailError: '',
            phoneError: '',
            addressError: '',
            nidNumberError: '',
            dateError: '',
            nomineeNameError: '',
            nomineePhoneError: '',
            nomineeNIDError: '',
            accountTypeError: '',
            documentError: '',
            password: '',
            passwordError: '',
        }
    },
    mounted() {
        this.getAccountType();
        this.generateAccountNumber();

    },
    methods: {
        generateAccountNumber() {
          const randomNumber = Math.floor(Math.random() * 1000000000);
          const paddedNumber = randomNumber.toString().padStart(10, '0');
          this.account_number = 'ACCT-' + paddedNumber;
        },
        getAccountType() {
            axios.get('http://127.0.0.1:8000/api/accountType')
                .then(res => {
                    this.accountType = (res.data.data)
                })

        },
        handleImageUpload(event) {
            this.photo = event.target.files[0];
        },
        hash(password) {
            return bcrypt.hashSync(password, 10);
        },
        savaCustomer() {
            let formData = new FormData();
            const hashedPassword = this.hash(this.password);
            formData.append('account_number', this.account_number);
            formData.append('customer_name', this.name);
            formData.append('email', this.email);
            formData.append('mobile', this.phone);
            formData.append('address', this.address);
            formData.append('photo', this.photo);
            formData.append('nid_number', this.nidNumber);
            formData.append('date_of_birth', this.date);
            formData.append('nominee_name', this.nomineeName);
            formData.append('nominee_mobile', this.nomineePhone);
            formData.append('nominee_nid_number', this.nomineeNID);
            formData.append('document', this.document);
            formData.append('account_type_id', this.selectedAccountType);
            formData.append('password', hashedPassword);

             //console.log(formData);
            axios.post(`${this.url}`, formData)
                .then(res => {
                     console.log(res)
                    this.$router.push({name:"customerList"})
                })
                .catch(error => {
                    console.error(error);
                });

        },
        handleSubmit() {
            this.nameError = '';
            this.emailError = '';
            this.phoneError = '';
            this.addressError = '';
            this.nidNumberError = '';
            this.dateError = '';
            this.nomineeNameError = '';
            this.nomineePhoneError = '';
            this.documentError = '';
            this.nomineeNIDError = '';
            this.passwordError = '';
            this.imageError = '';

            if (this.name.length < 1) {
                this.nameError = 'Name is required';
            }
            if (this.email.length < 1) {
                this.emailError = 'Email is required';
            }
            if (this.phone.length < 1) {
                this.phoneError = 'Phone is required';
            }
            if (this.address.length < 1) {
                this.addressError = 'Address is required';
            }
            if (this.nidNumber.length < 1) {
                this.nidNumberError = 'NID Number is required';
            }
            if (this.date.length < 1) {
                this.dateError = 'Date is required';
            }
            if (this.nomineeName.length < 1) {
                this.nomineeNameError = 'Nominee Name is required';
            }
            if (this.nomineePhone.length < 1) {
                this.nomineePhoneError = 'Nominee Phone is required';
            }
            if (this.nomineeNID.length < 1) {
                this.nomineeNIDError = 'Nominee NID is required';
            }
            if (this.document.length < 1) {
                this.documentError = 'Document is required';
            }
            if (this.password.length < 1) {
                this.passwordError = 'Password is required';
            }
            if (this.photo.length < 1) {
                this.passwordError = 'Image is required';
            }

        }

    },
    watch: {
        'name': function () {
            if (this.name.length < 4) {
                this.nameError = 'Name type Required'
            } else {
                this.nameError = ''
            }
        }
    }

}
</script>