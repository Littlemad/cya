// WRITE ONLY HIGLIGHTED CODE

const GridHtml1 = `<div className="grid grid--gap-m grid--col-pad-s">
    <div className="grid__col grid__col1">Col1</div>
    <div className="grid__col grid__col2">Col2</div>
    <div className="grid__col grid__col3">Col3</div>
    <div className="grid__col grid__col4">Col4</div>
    <div className="grid__col grid__col5">Col5</div>
    <div className="grid__col grid__col6">Col6</div>
    <div className="grid__col grid__col7">Col7</div>
    <div className="grid__col grid__col8">Col8</div>
    <div className="grid__col grid__col9">Col9</div>
    <div className="grid__col grid__col10">Col10</div>
    <div className="grid__col grid__col11">Col11</div>
    <div className="grid__col grid__col12">Col12</div>

    <div className="grid__col grid__col13">Col13</div>
    <div className="grid__col grid__col14">Col14</div>
    <div className="grid__col grid__col15">Col15</div>
    <div className="grid__col grid__col16">Col16</div>
    <div className="grid__col grid__col17">Col17</div>
    <div className="grid__col grid__col18">Col18</div>

    <div className="grid__col grid__col19">Col19</div>
    <div className="grid__col grid__col20">Col20</div>
    <div className="grid__col grid__col21">Col21</div>
    <div className="grid__col grid__col22">Col22</div>

    <div className="grid__col grid__col23">Col23</div>
    <div className="grid__col grid__col24">Col24</div>
    <div className="grid__col grid__col25">Col25</div>

    <div className="grid__col grid__col26">Col26</div>
    <div className="grid__col grid__col27">Col27</div>

    <div className="grid__col grid__col28">Col28</div>
</div>
`;

const GridCSS1 = `/* NOTES
- Columns from 1 to 12, are already by default occupy 1 column of the 12 grid system
- "column()" SASS mixin function it is used to generate columns automatically
*/

@include column(13, 18) {
    @include col-size-2;
}

@include column(19, 22) {
    @include col-size-3;
}

@include column(23, 25) {
    @include col-size-4;
}
@include column(26, 27) {
    @include col-size-6;
}
.grid__col28 {
    @include col-size-12;
}
`;

const GridHtml2 = `<div className="grid grid--gap-m grid--col-pad-s">
    <div className="grid__col grid__col1">Col1</div>
    <div className="grid__col grid__col2">Col2</div>
    <div className="grid__col grid__col3">Col3</div>
    <div className="grid__col grid__col4">Col4</div>
    <div className="grid__col grid__col5">Col5</div>
    <div className="grid__col grid__col6">Col6</div>
    <div className="grid__col grid__col7">Col7</div>
    <div className="grid__col grid__col8">Col8</div>
    <div className="grid__col grid__col9">Col9</div>
    <div className="grid__col grid__col10">Col10</div>
    <div className="grid__col grid__col11">Col11</div>
    <div className="grid__col grid__col12">Col12</div>
    <div className="grid__col grid__col13">Col13</div>
    <div className="grid__col grid__col14">Col14</div>
    <div className="grid__col grid__col15">Col15</div>
    <div className="grid__col grid__col16">Col16</div>
    <div className="grid__col grid__col17">Col17</div>
    <div className="grid__col grid__col18">Col18</div>
</div>
`;

const GridCSS2 = `.cui-grid__col1 {
    grid-column: span 2 / 3;
}

.cui-grid__col2 {
    grid-column: span 6 / 13;
}

.cui-grid__col3 {
    grid-column: span 4 / 7;
}

.cui-grid__col4 {
    grid-column: span 4 / 13;
}
        
.cui-grid__col5 {
    grid-column: span 4 / 5;
}

.cui-grid__col6 {
    grid-column: span 4 / 11;
}

.cui-grid__col7 {
    grid-column: span 3 / 7;
}

.cui-grid__col8 {
    grid-column: span 3 / 10;
}

.cui-grid__col9 {
    grid-column: span 10 / 13;
}   

.cui-grid__col10 {
    grid-column: span 6 / 7;
    grid-row: span 2;
}

@include column(11, 12) {
    grid-column: span 3 / 13;
}

.cui-grid__col13 {
    grid-column: span 8 / 11;
}

.cui-grid__col14 {
    grid-column: span 6 / 11;
}

.cui-grid__col15 {
    grid-column: span 4 / 6;
}

@include column(16, 18) {
    @include col-size-2;
}
`;

const GridCSS3 = `@include column(1, 18) {
    @include col-size-2;
}

.grid__col1{
    @include row-size-2;
}
.grid__col2{
    @include row-size-3;
}
.grid__col3{
    @include row-size-4;
}
.grid__col7{
    @include row-size-4;
}
.grid__col11{
    @include row-size-3;
}
.grid__col15{
    @include row-size-2;
}
`;

const GridCSS4 = `@include column(1, 6){
    @include col-size-2;
}

.grid__col1{
    @include row-size-6;
}
.grid__col2{
    grid-column: span 4 / 9;
}
.grid__col3{
    grid-column: span 4 / 10;
}
.grid__col4{
    grid-column: span 4 / 11;
    @include row-size-4;
}
.grid__col5{
    grid-column: span 2 / 13;
    grid-row: span 1 / 3;
}
.grid__col6{
    grid-column: span 2 / 13;
    grid-row: span 2 / 6;
}
`;

const GridCSS5 = `@include column(1, 28){
    @include col-size-2;
}

.grid__col1{     
    @include col-size-4;
    @include row-size-2;
}

.grid__col2{
    @include col-size-6;
    @include row-size-3;
}
.grid__col12{
    @include row-size-3;
}
.grid__col15{
    @include col-size-4;
    @include row-size-3;
}
.grid__col22{
    @include col-size-6;
}
`;

export {GridHtml1, GridCSS1, GridHtml2, GridCSS2, GridCSS3, GridCSS4, GridCSS5};
