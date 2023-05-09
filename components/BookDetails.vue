<script setup>
const props = defineProps({
  book: Object
})
</script>

<template>
  <div class="bg-base-100 shadow-xl rounded-xl">
    <h2 class="text-4xl font-bold leading-normal pt-10 pl-10">
      {{ book.short_title || 'No title' }}
    </h2>
    <h3 v-if="book.author_modern_attribution" class="text-3xl pl-10 mb-10">
      {{ book.author_modern_attribution }}
    </h3>
    <div class="px-4 pb-10">
      <div class="table table-zebra w-full">
        <div class="table-row-group">
          <DataRow title="Short title" :data="book.short_title" />
          <DataRow title="Short title modern spelling" :data="book.short_title_modern_spelling" />
          <DataRow title="Full title original spelling" :data="book.full_title_original_spelling" />
          <DataRow title="Variant title / AKA" :data="book.variant_title_or_aka" />
          <DataRowBool title="Presence of date on imprint" :data="book.presence_of_date_on_imprint" />
          <DataRow title="Date of imprint" :data="book.date_of_imprint" />
          <DataRow title="Location on imprint" :data="book.location_on_imprint" />
          <DataRow title="All imprint text" :data="book.all_imprint_text" />
          <DataRow title="Wing STC Number" :data="book.wing_stc_number" />
          <DataRow title="ESTC Citation No" :data="book.estc_citation_no" />
          <DataRowHtml title="See also" :data="book.see_also" />
          <DataRow title="Format" :data="book.format?.title" />
          <DataRow title="Estimated total page number" :data="book.estimated_total_page_number" />
          <DataRow title="Unpaginated" :data="book.unpaginated" />
          <DataRow title="Paginated Roman Numerals" :data="book.paginated_roman_numerals" />
          <DataRow title="Paginated Arabic Numerals" :data="book.paginated_arabic_numerals" />
          <DataRow title="Number of Leaves" :data="book.number_of_leaves" />
          <DataRow title="Language of first publication" :data="book.language_of_first_publication?.title" />
          <DataRow title="Other language of first publication" :data="book.other_language_of_first_publication" />
          <DataRow title="Language of title" :data="book.language_of_title?.title" />
          <DataRowBool title="Illustration" :data="book.illustration" />
          <DataRowHtml title="Illustration Description" :data="book.illustration_description" />
          <DataRowBool title="Ornament or Illustration on Title Page" :data="book.ornament_or_illustration_on_title_page" />
          <DataRowHtml title="TP Ornament/Illustration" :data="book.tp_ornament_or_illustration" />
          <DataRowBool title="Epigram/Epigraph on Title Page" :data="book.epigram_epigraph_on_title_page" />
          <DataRowBool title="Black Letter on Title page" :data="book.black_letter_on_title_page" />
          <DataRowBool title="Presence of books" :data="book.presence_of_books" />
          <DataRowBool title="Presence of chapters" :data="book.presence_of_chapters" />
          <DataRowBool title="Presence of letters" :data="book.presence_of_letters" />
          <DataRowBool title="Presence of sermons" :data="book.presence_of_sermons" />
          <DataRowBool title="Presence of stanzas" :data="book.presence_of_stanzas" />
          <DataRowBool title="Other divisions" :data="book.other_divisions" />
          <DataRow title="Date of London First edition" :data="book.date_of_london_first_edition" />
          <DataRow title="Post 1500 Edition Number" :data="book.post_1500_edition_number" />
          <DataRow title="Total Number of Editions" :data="book.total_number_of_editions" />
          <DataRow title="Term Catalogue Adverts" :data="book.term_catalogues_adverts" />
          <DataRow title="Newspaper Adverts" :data="book.newspaper_adverts" />
          <DataRowBool title="Price on Title Page" :data="book.price_on_title_page" />
          <DataRow title="Price £" :data="book.price_pounds" />
          <DataRow title="Price s" :data="book.price_shillings" />
          <DataRow title="Price d" :data="book.price_pence" />
          <DataRowBool title="Latin on Title Page" :data="book.latin_on_title_page" />
          <DataRowBool title="Greek on Title Page" :data="book.greek_on_title_page" />
          <DataRow title="Author Title Page Attribution" :data="book.author_title_page_attribution" />
          <DataRow title="Author Modern Attribution" :data="book.author_modern_attribution" />
          <DataRow title="Implied Gender of Author" :data="book.implied_gender_of_author" />
          <DataRowBool title="Implied Status of Author on Title Page" :data="book.implied_status_of_author_on_title_page" />
          <DataRowHtml title="Title Page Author Descriptor" :data="book.title_page_author_descriptor" />
          <DataRowBool title="Translation" :data="book.translation" />
          <DataRowBool title="Translator Attribution on Title Page" :data="book.translator_attribution_on_title_page" />
          <DataRow title="Modern Translator Attribution" :data="book.modern_translator_attribution" />
          <DataRowBool title="Direct Addressee" :data="book.direct_addressee" />
          <DataRow title="Direct Addresee Descriptor" :data="book.direct_addressee_descriptor?.title" />
          <DataRow title="Paratexts" :data="book.paratexts?.paratexts_id?.title" />
          <DataRow title="Other Paratext" :data="book.other_paratext" />
          <DataRowArray title="Working generic labels" :data="book.working_generic_labels" />
          <DataRowHtml title="Notes" :data="book.notes" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.has-links :deep(a) {
  color: rgb(87, 13, 248);
  text-decoration: underline;
}
</style>