export function Form() {
	return (
		<section class="bg-[--secondary]">
			<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
					<div class="lg:col-span-2 lg:py-12">
						<h1>Section 4</h1>
						<h2>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam quibusdam, voluptates, quod, quia
							quae quos quas quidem quae quibusdam, voluptates,
							quod, quia quae quos quas quidem quae
						</h2>
						<div class="mt-8">
							<a
								href="#"
								class="text-2xl font-bold text-pink-600">
								{" "}
								0151 475 4450{" "}
							</a>

							<address class="mt-2 not-italic">
								Uruguay Road, Montevideo, 12134
							</address>
						</div>
					</div>

					<div class=" bg-red-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
						<form action="#" class="space-y-4">
							<div>
								<label class="sr-only" for="name">
									Nombre
								</label>
								<input
									class="w-full  border-gray-200 p-3 text-sm"
									placeholder="Nombre"
									type="text"
									id="name"
								/>
							</div>

							<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label class="sr-only" for="email">
										Email
									</label>
									<input
										class="w-full  border-gray-200 p-3 text-sm"
										placeholder="Email"
										type="email"
										id="email"
									/>
								</div>

								<div>
									<label class="sr-only" for="phone">
										Teléfono
									</label>
									<input
										class="w-full  border-gray-200 p-3 text-sm"
										placeholder="Teléfono"
										type="tel"
										id="phone"
									/>
								</div>
							</div>

							<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
								<div>
									<label
										for="Option1"
										class="block w-full cursor-pointer  border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
										tabindex="0">
										<input
											class="sr-only"
											id="Option1"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<span class="text-sm"> Opción 1 </span>
									</label>
								</div>

								<div>
									<label
										for="Option2"
										class="block w-full cursor-pointer  border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
										tabindex="0">
										<input
											class="sr-only"
											id="Option2"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<span class="text-sm"> Opción 2 </span>
									</label>
								</div>

								<div>
									<label
										for="Option3"
										class="block w-full cursor-pointer  border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
										tabindex="0">
										<input
											class="sr-only"
											id="Option3"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<span class="text-sm"> Opción 3 </span>
									</label>
								</div>
							</div>

							<div>
								<label class="sr-only" for="message">
									Mensaje
								</label>

								<textarea
									class="w-full  border-gray-200 p-3 text-sm"
									placeholder="Mensaje"
									rows="8"
									id="message"></textarea>
							</div>

							<div class="mt-4">
								<button
									type="submit"
									class="inline-block w-full  bg-black px-5 py-3 font-medium text-white sm:w-auto">
									Enviar mensaje
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
