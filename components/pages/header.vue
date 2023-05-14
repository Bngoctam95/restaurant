<template>
  <div>
    <header>
      <a href="#" class="logo"><font-awesome-icon :icon="['fas', 'utensils']" />resto.</a>

      <nav class="navbar" :class="{ active: isActive }">
        <a v-for="(item, index) in menuList" :key="index" :href="item.href" :class="{ 'active': index === itemActive }">{{ item.label }}</a>
      </nav>
      <div class="icons">
        <font-awesome-icon class="items menu-mobile" :icon="['fas', isActive ? 'times' : 'bars']" @click="isActive = !isActive" />
        <font-awesome-icon class="items" :icon="['fas', 'magnifying-glass']" @click="isToggleSearch = !isToggleSearch" />
        <font-awesome-icon class="items" :icon="['fas', 'heart']" />
        <font-awesome-icon class="items" :icon="['fas', 'cart-shopping']" />
      </div>
    </header>
    <form class="search-form" :class="{active: isToggleSearch}" action="">
      <input class="search-box" type="search" name="" placeholder="Search here....">
      <label for="search-box">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </label>
      <font-awesome-icon class="close" :icon="['fas', 'xmark']" @click="isToggleSearch = !isToggleSearch" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      isActive: false,
      isToggleSearch: false,
      itemActive: 0,
      menuList: [
        {
          id: 1,
          href: '#home',
          label: 'Home'
        },
        {
          id: 2,
          href: '#dishes',
          label: 'Dishes'
        },
        {
          id: 3,
          href: '#about',
          label: 'About'
        },
        {
          id: 4,
          href: '#menu',
          label: 'Menu'
        },
        {
          id: 5,
          href: '#review',
          label: 'Review'
        },
        {
          id: 6,
          href: '#order',
          label: 'Order'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0; left: 0; right: 0;
    background-color: #fff;
    padding: 1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: var(--box-shadow);

    .logo {
      color: var(--black);
      font-size:2.5rem;
      font-weight: bolder;

      .fa-utensils {
        color: var(--green);
      }
    }

    .navbar {
      a {
        font-size: 1.7rem;
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        color: var(--light-color);
        margin-right: .1rem;

        &:hover {
          color: #fff;
          background-color: var(--green);
        }
      }
      a.active {
        color: #fff;
        background-color: var(--green);
      }
    }

    .icons {
      .items {
        cursor: pointer;
        margin-left: .5rem;
        padding: 1.5rem;
        width: 1.7rem;
        height: 1.7rem;
        line-height: 1.7rem;
        text-align: center;
        color: var(--black);
        border-radius: 50%;
        background-color: #eee;

        &:hover {
          color: #fff;
          background-color: var(--green);
          transform: rotate(360deg);
        }
      }

      .menu-mobile {
        display: none;
      }
    }
  }

  .search-form {
    position: fixed;
    top: -110%; left: 0;
    width: 100%;
    height: 100%;
    z-index: 1004;
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    label {
      color: #fff;
      cursor: pointer;
      font-size: 3rem;

      &:hover {
        color: var(--green);
      }
    }

    .search-box {
      width: 50rem;
      border-bottom: .1rem solid #fff;
      padding: 1rem 0;
      color: #fff;
      font-size: 3rem;
      text-transform: none;
      background:none;

      &::placeholder {
        color: #eee;
      }

      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }

    .close {
      position: absolute;
      color: #fff;
      cursor: pointer;
      top: 2rem; right:3rem;
      font-size:5rem;
    }
  }

  .search-form.active {
    top: 0;
  }

  /* Responsive */
  @media (max-width: 991px) {
    header {
      padding: 1rem 2rem;
    }
  }

  @media (max-width: 768px) {
    header {
      .navbar {
        position: absolute;
        top: 100%; left: 0; right: 0;
        background-color: #fff;
        border-top: .1rem solid rgba(0, 0, 0, .2);
        border-bottom: .1rem solid rgba(0, 0, 0, .2);
        padding: 1rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

        a {
          display: block;
          padding: 1.5rem;
          margin: 1rem;
          font-size: 2rem;
          background-color: #eee;
        }
      }

      .navbar.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }

      .icons {
        .menu-mobile {
          display: inline-block;
        }
      }
    }
  }
</style>
