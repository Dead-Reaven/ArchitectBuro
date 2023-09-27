<template>
	<section
		class="section-container h-full bg-[url('@/orderService/order-service.jpg')] bg-no-repeat bg-cover bg-center min-h-[780px]"
	>
		<!-- flex container -->
		<div
			class="flex flex-col gap-8 md:gap-14 lg:flex-row lg:gap-0 justify-around w-full h-full"
		>
			<!-- contacts -->
			<div class="flex flex-col gap-[16px] lg:w-[440px] h-full">
				<p class="caption">Зв'яжіться з нами</p>
				<h2>Замовити послугу</h2>
				<p>
					Залиште свої контакти і повідомлення. Наш менеджер зв’яжеться з вами
					найближчим часом.
				</p>
				<div class="flex gap-[6px] items-center contact-text">
					<img class="w-5 h-5" src="@/orderService/Email.svg" alt="email" />
					contact@company.com
				</div>
				<div class="flex gap-[6px] items-center contact-text">
					<img class="w-5 h-5" src="@/orderService/Phone.svg" alt="phone" />
					(066) 111 1111
				</div>
				<div class="flex gap-[6px] items-center contact-text">
					<img class="w-5 h-5" src="@/orderService/Mark.svg" alt="mark" /> 794
					Mcallister St San Francisco, 94102
				</div>
			</div>
			<!-- form -->
			<form
				class="flex flex-col max-w-[470px] w-full self-center gap-5 px-4 pt-[47px] pb-[74px] rounded-[25px] bg-blue-30"
			>
				<input
					class="rounded-[15px] py-3 px-5"
					type="text"
					placeholder="John Carter"
				/>
				<input
					class="rounded-[15px] py-3 px-5"
					type="text"
					placeholder="example@email.com"
				/>
				<input
					class="rounded-[15px] py-3 px-5"
					type="text"
					placeholder="(123) 456 - 789"
				/>
				<textarea
					class="rounded-[15px] py-3 px-5"
					type=""
					placeholder="Вид послуги, яку хочете замовити"
				/>
				<button type="submit" class="btn-primary mt-4">Замовити</button>
			</form>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
<style scoped>
.contact-text {
	color: #4d4d4d;
	font-feature-settings:
		'clig' off,
		'liga' off;

	/* Body/Default */
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 30px; /* 166.667% */
	text-align: left;
}
</style>
