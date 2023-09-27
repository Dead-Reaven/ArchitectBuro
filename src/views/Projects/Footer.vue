<script setup></script>
<template>
	<footer class="">
		<div
			class="bg-[url('@/orderService/order-service.jpg')] bg-cover bg-bottom min-h-[700px] py-[75px]"
		>
			<form
				class="container flex flex-col lg:absolute lg:right-[15%] max-w-[470px] w-full self-center gap-5 px-[50px] pt-[47px] pb-[74px] rounded-[25px] bg-white [&>input]:bg-blue-30 [&>textarea]:bg-blue-30"
			>
				<p class="caption">Ми на зв’язку</p>
				<h2 >Замовити послугу</h2>
				<p class="pb-4">
					Залиште свої контакти і повідомлення. Наш менеджер зв’яжеться з вами
					найближчим часом.
				</p>
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

		<!-- footer -->
		<div class="py-[60px] bg-[rgba(227,_160,_45,_1)]">
			<div class="container">
				<div
					class="flex max-md:flex-col justify-around !text-white gap-[16px] lg:w-[440px] h-full"
				>
					<!-- contacts -->
					<div class="flex flex-col gap-[12px]">
						<div class="flex gap-[6px] items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									d="M18.3332 5.94946V14.2828C18.3332 14.8353 18.1137 15.3652 17.723 15.7559C17.3323 16.1466 16.8024 16.3661 16.2498 16.3661H3.74984C3.1973 16.3661 2.6674 16.1466 2.2767 15.7559C1.886 15.3652 1.6665 14.8353 1.6665 14.2828V5.94946"
									stroke="white"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M18.3332 5.94954C18.3332 5.39701 18.1137 4.86711 17.723 4.47641C17.3323 4.0857 16.8024 3.86621 16.2498 3.86621H3.74984C3.1973 3.86621 2.6674 4.0857 2.2767 4.47641C1.886 4.86711 1.6665 5.39701 1.6665 5.94954L8.89567 10.4634C9.22678 10.6704 9.60938 10.7801 9.99984 10.7801C10.3903 10.7801 10.7729 10.6704 11.104 10.4634L18.3332 5.94954Z"
									stroke="white"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							contact@company.com
						</div>
						<div class="flex gap-[6px] items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									d="M12.2514 17.3851L12.2605 17.3915C13.0476 17.8926 13.982 18.1102 14.9095 18.0084C15.837 17.9065 16.7019 17.4913 17.3615 16.8313L17.9344 16.2584C18.0614 16.1315 18.1621 15.9808 18.2308 15.815C18.2995 15.6492 18.3349 15.4714 18.3349 15.2919C18.3349 15.1124 18.2995 14.9347 18.2308 14.7688C18.1621 14.603 18.0614 14.4524 17.9344 14.3255L15.5178 11.9107C15.3909 11.7838 15.2403 11.683 15.0745 11.6143C14.9086 11.5456 14.7309 11.5102 14.5514 11.5102C14.3719 11.5102 14.1941 11.5456 14.0283 11.6143C13.8625 11.683 13.7118 11.7838 13.5849 11.9107C13.3287 12.1669 12.9813 12.3108 12.619 12.3108C12.2567 12.3108 11.9092 12.1669 11.653 11.9107L7.78901 8.04586C7.53287 7.78963 7.38897 7.44217 7.38897 7.07987C7.38897 6.71757 7.53287 6.3701 7.78901 6.11388C7.91598 5.987 8.0167 5.83633 8.08542 5.67051C8.15414 5.50468 8.18951 5.32694 8.18951 5.14744C8.18951 4.96794 8.15414 4.79019 8.08542 4.62437C8.0167 4.45854 7.91598 4.30788 7.78901 4.18099L5.37336 1.76625C5.11714 1.51011 4.76967 1.36621 4.40737 1.36621C4.04507 1.36621 3.69761 1.51011 3.44138 1.76625L2.86753 2.33919C2.20768 2.99883 1.79262 3.86385 1.69093 4.79131C1.58924 5.71878 1.80701 6.65318 2.30825 7.44012L2.31371 7.44923C4.9609 11.3658 8.33434 14.7386 12.2514 17.3851V17.3851Z"
									stroke="white"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							(066) 111 1111
						</div>
						<div class="flex gap-[6px] items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									d="M16.8607 8.95631C16.8607 14.3351 11.3515 17.6489 10.2066 18.2801C10.1432 18.3151 10.0719 18.3334 9.99949 18.3334C9.92706 18.3334 9.85581 18.3151 9.79238 18.2801C8.64664 17.6489 3.13916 14.3351 3.13916 8.95631C3.13916 4.66833 5.71195 1.66675 9.99992 1.66675C14.2879 1.66675 16.8607 4.66833 16.8607 8.95631Z"
									stroke="white"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M6.56934 8.52755C6.56934 9.43734 6.93075 10.3099 7.57407 10.9532C8.21739 11.5965 9.08992 11.9579 9.99972 11.9579C10.9095 11.9579 11.782 11.5965 12.4254 10.9532C13.0687 10.3099 13.4301 9.43734 13.4301 8.52755C13.4301 7.61775 13.0687 6.74522 12.4254 6.1019C11.782 5.45858 10.9095 5.09717 9.99972 5.09717C9.08992 5.09717 8.21739 5.45858 7.57407 6.1019C6.93075 6.74522 6.56934 7.61775 6.56934 8.52755V8.52755Z"
									stroke="white"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Mcallister St <br />
							San Francisco, 94102
						</div>
					</div>
					<!-- social media -->
					<div class="flex flex-col gap-[12px]">
						<div class="flex gap-[6px] w-[120px] justify-between items-center">
							<a href="#">Facebook</a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
									fill="white"
								/>
							</svg>
						</div>
						<div class="flex gap-[6px] w-[120px] justify-between items-center">
							<a href="#">Instagram</a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
									fill="white"
								/>
							</svg>
						</div>
						<div class="flex gap-[6px] w-[120px] justify-between items-center">
							<a href="#">Telegram</a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
