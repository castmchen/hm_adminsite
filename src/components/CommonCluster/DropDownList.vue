<template>
    <div>
        <dropdown>
            <a href="javascript:void(0)">
                {{dropdownInfo.DefaultValue}}
                <icon type="ios-arrow-down"></icon>
            </a>
            <dropdown-menu slot="list">
                <dropdown-item v-for="dropdownItem in dropdownInfo.Items" :key="dropdownItem" @click="changeDropDownItem(dropdownItem)">{{dropdownItem}}</dropdown-item>
            </dropdown-menu>
        </dropdown>
    </div>
</template>

<script>
export default {
  props: ["dropdownInfo"],
  data() {
    return {};
  },
  methods: {
    changeDropDownItem: function(selectedValue) {
      this.$emit("dropdown-change", selectedValue);
    }
  }
};
</script>
