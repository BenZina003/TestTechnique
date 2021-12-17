<template>
  <header class="header d-flex align-center">
    <router-link to="/" class="logo">
      <h1>Hello</h1><span> Flashbrand </span>
    </router-link>
  </header>
</template>

<script>


export default {

};
</script>


<style lang="scss">

@import "@/scss/_colors.scss";

header.header {
	background-color: $blue-02;
	position: relative;
	padding: 16px 32px;
	&:after {
		content: "";
		top: 0;
		right: 0;
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 32px 32px 0;
		border-color: transparent $grey-01 transparent transparent;
	}
	.logo {
		margin-right: 24px;
		h1 {
			display: inline-block;
			color: $orange-01;
			font-size: 24px;
			font-weight: 900;
			margin-right: 12px;
		}
		span {
			font-size: 24px;
			color: $white;
		}
	}
	nav {
		margin-left: auto;
		font-size: 14px;
		text-transform: uppercase;
		align-self: flex-end;
		a {
			color: $white;
			padding: 0 20px;
			position: relative;
			&.router-link-exact-active {
				font-weight: 700;
				&:after {
					content: "";
					position: absolute;
					left: 0;
					right: 0;
					bottom: -18px;
					height: 2px;
					background-color: $white;
				}
			}
		}
	}
}

</style>
