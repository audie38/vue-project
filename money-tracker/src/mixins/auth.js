export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      error: null,
    };
  },
  props: {
    authMessage: {
      type: String,
      required: false,
      default: "",
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {},
  methods: {},
};
