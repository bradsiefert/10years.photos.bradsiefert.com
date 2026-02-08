<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-xl-8 m-auto">
        <ContentDoc class="text-block">
          <template #not-found>
            <p>Oh no! 404 Error. Document not found.</p>
          </template>

          <template #empty>
            <p>Loading...</p>
          </template>
        </ContentDoc>
        </div>
      </div>
    </div>
</template>