'use strict';

const PARTICLE_CATALOG = {"minecraft:cherry_leaves_particle":{"id":"minecraft:cherry_leaves_particle","texture":"textures/particle/cherry_petal_atlas","material":"particles_alpha","uv":[{"expression":"math.floor(v.particle_random_1 * 4) * 3","version":9},{"expression":"math.floor(v.particle_random_2 * 3) * 3","version":9}],"uv_size":[3,3],"tex_size":[12,9],"flipbook":false,"shape":"box","motion":"idle","kind":"ambient","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:electric_spark_particle":{"id":"minecraft:electric_spark_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,48],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"spark","notes":["tinted","instant","once","dynamic"]},"minecraft:green_flame_particle":{"id":"minecraft:green_flame_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[32,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"sphere","motion":"idle","kind":"fire","notes":["manual","timed"]},"minecraft:sulfur_bubble_particle":{"id":"minecraft:sulfur_bubble_particle","texture":"textures/particle/bubble_white","material":"particles_blend","uv":[0,0],"uv_size":[8,8],"tex_size":[8,8],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","tinted","collision","instant","once","dynamic"]},"minecraft:lava_particle":{"id":"minecraft:lava_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[10,26],"uv_size":[4,4],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:sculk_charge_pop_particle":{"id":"minecraft:sculk_charge_pop_particle","texture":"textures/particle/sculk_charge_pop","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[16,64],"flipbook":true,"shape":"point","motion":"idle","kind":"magic","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:trial_spawner_detection":{"id":"minecraft:trial_spawner_detection","texture":"textures/particles/trial_spawner_atlas","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[8,8],"flipbook":true,"shape":"box","motion":"idle","kind":"misc","notes":["tinted","flipbook","instant","once","dynamic"]},"minecraft:heart_particle":{"id":"minecraft:heart_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"sphere","motion":"idle","kind":"cute","notes":["lighting","manual","timed","dynamic"]},"minecraft:breeze_ground_particle":{"id":"minecraft:breeze_ground_particle","texture":"atlas.terrain","material":"particles_alpha","uv":[{"expression":"variable.ground_particle_texture_coordinate.u + (variable.ground_particle_texture_size.u/4) * (variable.particle_random_1*3)","version":12},{"expression":"variable.ground_particle_texture_coordinate.v + (variable.ground_particle_texture_size.v/4) * (variable.particle_random_2*3)","version":12}],"uv_size":[{"expression":"variable.ground_particle_texture_size.u/4","version":12},{"expression":"variable.ground_particle_texture_size.v/4","version":12}],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","collision","instant","once","dynamic"]},"minecraft:sneeze":{"id":"minecraft:sneeze","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","tinted","flipbook","instant","once"]},"minecraft:basic_bubble_particle":{"id":"minecraft:basic_bubble_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","instant","once","dynamic"]},"minecraft:totem_manual":{"id":"minecraft:totem_manual","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","tinted","flipbook","manual","timed","dynamic"]},"minecraft:creaking_crumble_head":{"id":"minecraft:creaking_crumble_head","texture":"textures/blocks/creaking_heart_side_active","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_1 * 12.0)","version":12},{"expression":"Math.round(variable.particle_random_2 * 12.0)","version":12}],"uv_size":[4,4],"tex_size":[16,16],"flipbook":false,"shape":"box","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:eye_of_ender_bubble_particle":{"id":"minecraft:eye_of_ender_bubble_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","instant","once","dynamic"]},"minecraft:water_wake_particle":{"id":"minecraft:water_wake_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"24 + Math.mod(Math.Round(60 - (variable.particle_lifetime * 20)), 4) * 8","version":0},8],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["instant","once","dynamic"]},"minecraft:arrow_spell_emitter":{"id":"minecraft:arrow_spell_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:end_chest":{"id":"minecraft:end_chest","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.custom_random1*8)*8","version":0},0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["tinted","instant","timed"]},"minecraft:dust_plume":{"id":"minecraft:dust_plume","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:fish_hook_particle":{"id":"minecraft:fish_hook_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","instant","once","dynamic"]},"minecraft:guardian_attack_particle":{"id":"minecraft:guardian_attack_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","instant","once","dynamic"]},"minecraft:basic_portal_particle":{"id":"minecraft:basic_portal_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_1*8)*8","version":0},0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"magic","notes":["tinted","instant","timed"]},"minecraft:sculk_soul_particle":{"id":"minecraft:sculk_soul_particle","texture":"textures/particle/sculk_soul","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[16,176],"flipbook":true,"shape":"point","motion":"idle","kind":"magic","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:dragon_dying_explosion":{"id":"minecraft:dragon_dying_explosion","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"burst","kind":"impact","notes":["tinted","flipbook","instant","once"]},"minecraft:magnesium_salts_emitter":{"id":"minecraft:magnesium_salts_emitter","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:rising_border_dust_particle":{"id":"minecraft:rising_border_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","manual","timed","dynamic"]},"minecraft:dolphin_move_particle":{"id":"minecraft:dolphin_move_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","timed","dynamic"]},"minecraft:enchanting_table_particle":{"id":"minecraft:enchanting_table_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"variable.particle_random_3 < 0.5 ? Math.round(variable.particle_random_2 * 14) * 8 + 8 : Math.round(variable.particle_random_2 * 10) * 8","version":0},{"expression":"variable.particle_random_3 < 0.5 ? 112 : 120","version":0}],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","instant","once"]},"minecraft:falling_dust_dragon_egg_particle":{"id":"minecraft:falling_dust_dragon_egg_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:trial_omen_single":{"id":"minecraft:trial_omen_single","texture":"textures/particle/trial_omen","material":"particles_alpha","uv":[0,0],"uv_size":[16,16],"tex_size":[16,16],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:evoker_spell":{"id":"minecraft:evoker_spell","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[16,16],"flipbook":true,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","tinted","flipbook","collision","dynamic"]},"minecraft:oozing_emitter":{"id":"minecraft:oozing_emitter","texture":"textures/items/slimeball","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_1 * 12.0)","version":12},{"expression":"Math.round(variable.particle_random_2 * 12.0)","version":12}],"uv_size":[4,4],"tex_size":[16,16],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","collision","instant","dynamic"]},"minecraft:crop_growth_area_emitter":{"id":"minecraft:crop_growth_area_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"ambient","notes":["instant","once","dynamic"]},"minecraft:water_evaporation_actor_emitter":{"id":"minecraft:water_evaporation_actor_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"liquid","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:biome_tinted_leaves_particle":{"id":"minecraft:biome_tinted_leaves_particle","texture":"textures/particle/biome_tinted_leaves_atlas","material":"particles_alpha","uv":[{"expression":"math.floor(v.particle_random_1 * 4) * 7","version":12},{"expression":"math.floor(v.particle_random_2 * 3) * 7","version":12}],"uv_size":[7,7],"tex_size":[28,21],"flipbook":false,"shape":"box","motion":"idle","kind":"ambient","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:eyeofender_death_explode_particle":{"id":"minecraft:eyeofender_death_explode_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:knockback_roar_particle":{"id":"minecraft:knockback_roar_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:falling_dust_top_snow_particle":{"id":"minecraft:falling_dust_top_snow_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:critical_hit_emitter":{"id":"minecraft:critical_hit_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","once","dynamic"]},"minecraft:breeze_wind_explosion_emitter":{"id":"minecraft:breeze_wind_explosion_emitter","texture":"textures/particle/gust","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[384,32],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["flipbook","once"]},"minecraft:bleach":{"id":"minecraft:bleach","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","manual","timed","dynamic"]},"minecraft:mobspell_emitter":{"id":"minecraft:mobspell_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:bubble_column_up_particle":{"id":"minecraft:bubble_column_up_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","manual","timed","dynamic"]},"minecraft:witchspell_emitter":{"id":"minecraft:witchspell_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:redstone_repeater_dust_particle":{"id":"minecraft:redstone_repeater_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","collision","instant","timed","dynamic"]},"minecraft:portal_reverse_particle":{"id":"minecraft:portal_reverse_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_1*8)*8","version":0},0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"magic","notes":["tinted","once","timed","dynamic"]},"minecraft:explosion_manual":{"id":"minecraft:explosion_manual","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["lighting","tinted","flipbook","collision","manual","timed","dynamic"]},"minecraft:dragon_destroy_block":{"id":"minecraft:dragon_destroy_block","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"misc","notes":["tinted","flipbook","instant","once"]},"minecraft:ink_emitter":{"id":"minecraft:ink_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"liquid","notes":["tinted","flipbook","collision","instant","timed","dynamic"]},"minecraft:warden_dig":{"id":"minecraft:warden_dig","texture":"atlas.terrain","material":"particles_opaque","uv":[{"expression":"variable.dig_particle_texture_coordinate.u + (variable.dig_particle_texture_size.u/4) * (variable.particle_random_1*3)","version":6},{"expression":"variable.dig_particle_texture_coordinate.v + (variable.dig_particle_texture_size.v/4) * (variable.particle_random_2*3)","version":6}],"uv_size":[{"expression":"variable.dig_particle_texture_size.u/4","version":6},{"expression":"variable.dig_particle_texture_size.v/4","version":6}],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"impact","notes":["lighting","tinted","collision","once","dynamic"]},"minecraft:basic_crit_particle":{"id":"minecraft:basic_crit_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:geyser_poof":{"id":"minecraft:geyser_poof","texture":"textures/particle/geyser_poof","material":"particles_blend","uv":null,"uv_size":null,"tex_size":[16,128],"flipbook":true,"shape":"box","motion":"idle","kind":"misc","notes":["lighting","flipbook","instant","once","dynamic"]},"minecraft:campfire_smoke_particle":{"id":"minecraft:campfire_smoke_particle","texture":"textures/particle/campfire_smoke","material":"particles_alpha","uv":[0,{"expression":"Math.floor(variable.particle_random_2 * 12)","version":0}],"uv_size":[1,1],"tex_size":null,"flipbook":false,"shape":"custom","motion":"idle","kind":"smoke","notes":["lighting","collision","manual","timed","dynamic"]},"minecraft:conduit_particle":{"id":"minecraft:conduit_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_2 * 11) * 8","version":0},104],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","instant","once"]},"minecraft:mobspell_lingering":{"id":"minecraft:mobspell_lingering","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"disc","motion":"idle","kind":"misc","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:silverfish_grief_emitter":{"id":"minecraft:silverfish_grief_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"liquid","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:shulker_bullet":{"id":"minecraft:shulker_bullet","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"misc","notes":["tinted","flipbook","manual","timed","dynamic"]},"minecraft:nautilus_bubbles_particle":{"id":"minecraft:nautilus_bubbles_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","timed","dynamic"]},"minecraft:candle_flame_particle":{"id":"minecraft:candle_flame_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,24],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"sphere","motion":"idle","kind":"fire","notes":["manual","timed"]},"minecraft:misc_fire_vapor_particle":{"id":"minecraft:misc_fire_vapor_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"fire","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:falling_dust":{"id":"minecraft:falling_dust","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:glow_particle":{"id":"minecraft:glow_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,48],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"magic","notes":["tinted","instant","once","dynamic"]},"minecraft:mobspell_ambient":{"id":"minecraft:mobspell_ambient","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"misc","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:falling_dust_red_sand_particle":{"id":"minecraft:falling_dust_red_sand_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:redstone_torch_dust_particle":{"id":"minecraft:redstone_torch_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","collision","instant","timed","dynamic"]},"minecraft:cauldron_bubble_particle":{"id":"minecraft:cauldron_bubble_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","instant","once","dynamic"]},"minecraft:lab_table_misc_mystical_particle":{"id":"minecraft:lab_table_misc_mystical_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"variable.particle_random_3 < 0.5 ? Math.round(variable.particle_random_2 * 14) * 8 + 8 : Math.round(variable.particle_random_2 * 10) * 8","version":0},{"expression":"variable.particle_random_3 < 0.5 ? 112 : 120","version":0}],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","instant","once"]},"minecraft:smash_ground_particle":{"id":"minecraft:smash_ground_particle","texture":"atlas.terrain","material":"particles_alpha","uv":[{"expression":"variable.surface_particle_texture_coordinate.u + (variable.surface_particle_texture_size.u/4) * (variable.particle_random_1*3)","version":12},{"expression":"variable.surface_particle_texture_coordinate.v + (variable.surface_particle_texture_size.v/4) * (variable.particle_random_2*3)","version":12}],"uv_size":[{"expression":"variable.surface_particle_texture_size.u/4","version":12},{"expression":"variable.surface_particle_texture_size.v/4","version":12}],"tex_size":null,"flipbook":false,"shape":"disc","motion":"idle","kind":"smoke","notes":["lighting","tinted","collision","instant","once","dynamic"]},"minecraft:blue_flame_particle":{"id":"minecraft:blue_flame_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,24],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"sphere","motion":"idle","kind":"fire","notes":["manual","timed"]},"minecraft:cauldron_explosion_emitter":{"id":"minecraft:cauldron_explosion_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:magic_critical_hit_emitter":{"id":"minecraft:magic_critical_hit_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,32],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"magic","notes":["lighting","tinted","once","dynamic"]},"minecraft:small_soul_fire_flame":{"id":"minecraft:small_soul_fire_flame","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,24],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"fire","notes":["tinted","instant","once","dynamic"]},"minecraft:lava_drip_particle":{"id":"minecraft:lava_drip_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["tinted","collision","manual","timed","dynamic"]},"minecraft:water_splash_particle_manual":{"id":"minecraft:water_splash_particle_manual","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"24+Math.Round(variable.particle_random_1*3.0)*8","version":0},8],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:water_evaporation_bucket_emitter":{"id":"minecraft:water_evaporation_bucket_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"liquid","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:elephant_tooth_paste_vapor_particle":{"id":"minecraft:elephant_tooth_paste_vapor_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:underwater_torch_particle":{"id":"minecraft:underwater_torch_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","instant","once","dynamic"]},"minecraft:portal_east_west":{"id":"minecraft:portal_east_west","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_3*8)*8","version":0},0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"magic","notes":["tinted","instant","timed","dynamic"]},"minecraft:raid_omen_emitter":{"id":"minecraft:raid_omen_emitter","texture":"textures/particle/raid_omen","material":"particles_alpha","uv":[0,0],"uv_size":[16,16],"tex_size":[16,16],"flipbook":false,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:large_explosion":{"id":"minecraft:large_explosion","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"burst","kind":"impact","notes":["tinted","flipbook","instant","once"]},"minecraft:vibration_signal":{"id":"minecraft:vibration_signal","texture":"textures/particle/vibration_signal","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[18,125],"flipbook":true,"shape":"point","motion":"idle","kind":"signal","notes":["tinted","flipbook","instant","once","dynamic"]},"minecraft:fish_pos_particle":{"id":"minecraft:fish_pos_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","instant","once","dynamic"]},"minecraft:stalactite_water_drip_particle":{"id":"minecraft:stalactite_water_drip_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:mobflame_single":{"id":"minecraft:mobflame_single","texture":"textures/flame_atlas","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":null,"flipbook":true,"shape":"entity_aabb","motion":"idle","kind":"fire","notes":["flipbook","instant","once","dynamic"]},"minecraft:firefly_particle":{"id":"minecraft:firefly_particle","texture":"textures/particle/pixel","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"fire","notes":["tinted","collision","instant","once","dynamic"]},"minecraft:block_slide":{"id":"minecraft:block_slide","texture":"atlas.terrain","material":"particles_alpha","uv":[{"expression":"variable.emitter_texture_coordinate.u + (variable.emitter_texture_size.u/4) * (variable.particle_random_1*3)","version":12},{"expression":"variable.emitter_texture_coordinate.v + (variable.emitter_texture_size.v/4) * (variable.particle_random_2*3)","version":12}],"uv_size":[{"expression":"variable.emitter_texture_size.u/4","version":12},{"expression":"variable.emitter_texture_size.v/4","version":12}],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","tinted","collision","instant","once","dynamic"]},"minecraft:bubble_column_down_particle":{"id":"minecraft:bubble_column_down_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","manual","timed","dynamic"]},"minecraft:shriek_particle":{"id":"minecraft:shriek_particle","texture":"textures/particle/shriek","material":"particles_blend","uv":[0,0],"uv_size":[4,4],"tex_size":[4,4],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","once","dynamic"]},"minecraft:block_destruct":{"id":"minecraft:block_destruct","texture":"atlas.terrain","material":"particles_alpha","uv":[{"expression":"variable.emitter_texture_coordinate.u + (variable.emitter_texture_size.u/4) * (variable.particle_random_1*3)","version":12},{"expression":"variable.emitter_texture_coordinate.v + (variable.emitter_texture_size.v/4) * (variable.particle_random_2*3)","version":12}],"uv_size":[{"expression":"variable.emitter_texture_size.u/4","version":12},{"expression":"variable.emitter_texture_size.v/4","version":12}],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","tinted","collision","instant","once","dynamic"]},"minecraft:pause_mob_growth":{"id":"minecraft:pause_mob_growth","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"misc","notes":["lighting","instant","once","dynamic"]},"minecraft:dragon_breath_lingering":{"id":"minecraft:dragon_breath_lingering","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"disc","motion":"idle","kind":"misc","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:vault_connection_particle":{"id":"minecraft:vault_connection_particle","texture":"textures/particle/vault_connection","material":"particles_blend","uv":[0,0],"uv_size":[8,8],"tex_size":[8,8],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","instant","once"]},"minecraft:breaking_item_terrain":{"id":"minecraft:breaking_item_terrain","texture":"atlas.terrain","material":"particles_alpha","uv":[{"expression":"variable.EmitterTextureCoord.u + (variable.EmitterTextureSize.u/4) * (variable.particle_random_1*3)","version":0},{"expression":"variable.EmitterTextureCoord.v + (variable.EmitterTextureSize.v/4) * (variable.particle_random_2*3)","version":0}],"uv_size":[{"expression":"variable.EmitterTextureSize.u/4","version":0},{"expression":"variable.EmitterTextureSize.v/4","version":0}],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:falling_border_dust_particle":{"id":"minecraft:falling_border_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","manual","timed","dynamic"]},"minecraft:campfire_tall_smoke_particle":{"id":"minecraft:campfire_tall_smoke_particle","texture":"textures/particle/campfire_smoke","material":"particles_alpha","uv":[0,{"expression":"Math.floor(variable.particle_random_2 * 12)","version":0}],"uv_size":[1,1],"tex_size":null,"flipbook":false,"shape":"custom","motion":"idle","kind":"smoke","notes":["lighting","collision","manual","timed","dynamic"]},"minecraft:wind_charged_ambient":{"id":"minecraft:wind_charged_ambient","texture":"textures/particle/small_gust","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[55,8],"flipbook":true,"shape":"point","motion":"idle","kind":"wind","notes":["lighting","flipbook","instant","once"]},"minecraft:villager_happy":{"id":"minecraft:villager_happy","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","manual","timed","dynamic"]},"minecraft:ice_evaporation_emitter":{"id":"minecraft:ice_evaporation_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:mob_block_spawn_emitter":{"id":"minecraft:mob_block_spawn_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:redstone_ore_dust_particle":{"id":"minecraft:redstone_ore_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","collision","instant","timed","dynamic"]},"minecraft:infested_ambient":{"id":"minecraft:infested_ambient","texture":"textures/particle/infested","material":"particles_blend","uv":[0,0],"uv_size":[16,16],"tex_size":[16,16],"flipbook":false,"shape":"custom","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:breaking_item_icon":{"id":"minecraft:breaking_item_icon","texture":"atlas.items","material":"particles_alpha","uv":[{"expression":"variable.EmitterTextureCoord.u + (variable.EmitterTextureSize.u/4) * (variable.particle_random_1*3)","version":0},{"expression":"variable.EmitterTextureCoord.v + (variable.EmitterTextureSize.v/4) * (variable.particle_random_2*3)","version":0}],"uv_size":[{"expression":"variable.EmitterTextureSize.u/4","version":0},{"expression":"variable.EmitterTextureSize.v/4","version":0}],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:smash_ground_particle_center":{"id":"minecraft:smash_ground_particle_center","texture":"atlas.terrain","material":"particles_alpha","uv":[{"expression":"variable.surface_particle_texture_coordinate.u + (variable.surface_particle_texture_size.u/4) * (variable.particle_random_1*3)","version":12},{"expression":"variable.surface_particle_texture_coordinate.v + (variable.surface_particle_texture_size.v/4) * (variable.particle_random_2*3)","version":12}],"uv_size":[{"expression":"variable.surface_particle_texture_size.u/4","version":12},{"expression":"variable.surface_particle_texture_size.v/4","version":12}],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"smoke","notes":["lighting","tinted","collision","instant","once","dynamic"]},"minecraft:water_drip_particle":{"id":"minecraft:water_drip_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:geyser_base":{"id":"minecraft:geyser_base","texture":"textures/particle/geyser_base","material":"particles_blend","uv":null,"uv_size":null,"tex_size":[16,128],"flipbook":true,"shape":"box","motion":"idle","kind":"misc","notes":["lighting","flipbook","collision","once","dynamic"]},"minecraft:wind_explosion_emitter":{"id":"minecraft:wind_explosion_emitter","texture":"textures/particle/gust","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[384,32],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["flipbook","once"]},"minecraft:falling_dust_gravel_particle":{"id":"minecraft:falling_dust_gravel_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:dragon_breath_trail":{"id":"minecraft:dragon_breath_trail","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"trail","notes":["lighting","tinted","flipbook","manual","timed"]},"minecraft:mycelium_dust_particle":{"id":"minecraft:mycelium_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","manual","timed","dynamic"]},"minecraft:stunned_emitter":{"id":"minecraft:stunned_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","timed","dynamic"]},"minecraft:balloon_gas_particle":{"id":"minecraft:balloon_gas_particle","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:nectar_drip_particle":{"id":"minecraft:nectar_drip_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","tinted","collision","timed","dynamic"]},"minecraft:camera_shoot_explosion":{"id":"minecraft:camera_shoot_explosion","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"burst","kind":"impact","notes":["tinted","flipbook","instant","once"]},"minecraft:totem_particle":{"id":"minecraft:totem_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","once","dynamic"]},"minecraft:crop_growth_emitter":{"id":"minecraft:crop_growth_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"ambient","notes":["instant","once","dynamic"]},"minecraft:honey_drip_particle":{"id":"minecraft:honey_drip_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"liquid","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:sculk_charge_particle":{"id":"minecraft:sculk_charge_particle","texture":"textures/particle/sculk_charge","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[16,111],"flipbook":true,"shape":"point","motion":"idle","kind":"magic","notes":["lighting","tinted","flipbook","instant","once"]},"minecraft:explosion_particle":{"id":"minecraft:explosion_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"burst","kind":"impact","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:dragon_breath_fire":{"id":"minecraft:dragon_breath_fire","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"fire","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:cauldron_splash_particle":{"id":"minecraft:cauldron_splash_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"variable.texture_coord.u","version":0},{"expression":"variable.texture_coord.v","version":0}],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"smoke","notes":["lighting","tinted","instant","once","dynamic"]},"minecraft:trial_spawner_detection_ominous":{"id":"minecraft:trial_spawner_detection_ominous","texture":"textures/particles/trial_spawner_ominous_atlas","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[8,8],"flipbook":true,"shape":"box","motion":"idle","kind":"misc","notes":["tinted","flipbook","instant","once","dynamic"]},"minecraft:ominous_spawning_particle":{"id":"minecraft:ominous_spawning_particle","texture":"textures/particle/ominous_spawning","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":null,"flipbook":false,"shape":"sphere","motion":"idle","kind":"ambient","notes":["tinted","once","dynamic"]},"minecraft:squid_flee_particle":{"id":"minecraft:squid_flee_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","instant","once","dynamic"]},"minecraft:small_flame_particle":{"id":"minecraft:small_flame_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,24],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"fire","notes":["tinted","instant","once","dynamic"]},"minecraft:reset_mob_growth":{"id":"minecraft:reset_mob_growth","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"misc","notes":["lighting","instant","once","dynamic"]},"minecraft:oozing_ambient":{"id":"minecraft:oozing_ambient","texture":"textures/items/slimeball","material":"particles_blend","uv":[{"expression":"Math.round(variable.particle_random_1 * 12.0)","version":12},{"expression":"Math.round(variable.particle_random_2 * 12.0)","version":12}],"uv_size":[4,4],"tex_size":[16,16],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","collision","instant","dynamic"]},"minecraft:stalactite_lava_drip_particle":{"id":"minecraft:stalactite_lava_drip_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["tinted","collision","manual","timed","dynamic"]},"minecraft:portal_directional":{"id":"minecraft:portal_directional","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_1*8)*8","version":0},0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"magic","notes":["tinted","instant","timed"]},"minecraft:soul_particle":{"id":"minecraft:soul_particle","texture":"textures/particle/soul","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[16,176],"flipbook":true,"shape":"point","motion":"idle","kind":"magic","notes":["flipbook","instant","once","dynamic"]},"minecraft:squid_move_particle":{"id":"minecraft:squid_move_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","instant","once","dynamic"]},"minecraft:egg_destroy_emitter":{"id":"minecraft:egg_destroy_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"impact","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:splash_spell_emitter":{"id":"minecraft:splash_spell_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"smoke","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:wind_charged_emitter":{"id":"minecraft:wind_charged_emitter","texture":"textures/particle/small_gust","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[55,8],"flipbook":true,"shape":"point","motion":"idle","kind":"wind","notes":["lighting","flipbook","instant","once"]},"minecraft:creaking_heart_trail":{"id":"minecraft:creaking_heart_trail","texture":"textures/particle/pixel","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"trail","notes":["tinted","instant","once","dynamic"]},"minecraft:sonic_explosion":{"id":"minecraft:sonic_explosion","texture":"textures/particle/sonic_explosion","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[32,512],"flipbook":true,"shape":"point","motion":"burst","kind":"impact","notes":["tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:huge_explosion_lab_misc_emitter":{"id":"minecraft:huge_explosion_lab_misc_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["tinted","flipbook"]},"minecraft:water_splash_particle":{"id":"minecraft:water_splash_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"24+Math.Round(variable.particle_random_1*3.0)*8","version":0},8],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","tinted","collision","instant","once","dynamic"]},"minecraft:basic_smoke_particle":{"id":"minecraft:basic_smoke_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"smoke","notes":["lighting","tinted","flipbook","manual","timed","dynamic"]},"minecraft:dragon_death_explosion_emitter":{"id":"minecraft:dragon_death_explosion_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["tinted","flipbook","once"]},"minecraft:trial_omen_ambient":{"id":"minecraft:trial_omen_ambient","texture":"textures/particle/trial_omen","material":"particles_blend","uv":[0,0],"uv_size":[16,16],"tex_size":[16,16],"flipbook":false,"shape":"custom","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:llama_spit_smoke":{"id":"minecraft:llama_spit_smoke","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"smoke","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:falling_dust_scaffolding_particle":{"id":"minecraft:falling_dust_scaffolding_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:geyser_plume":{"id":"minecraft:geyser_plume","texture":"textures/particle/geyser_plume","material":"particles_blend","uv":null,"uv_size":null,"tex_size":[16,128],"flipbook":true,"shape":"box","motion":"idle","kind":"misc","notes":["lighting","flipbook","collision","once","dynamic"]},"minecraft:snowflake_particle":{"id":"minecraft:snowflake_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"1.25 - (Math.floor(5 * variable.particle_age / variable.particle_lifetime) / 4)","version":1},0],"uv_size":[0.25,0.25],"tex_size":[4,4],"flipbook":false,"shape":"custom","motion":"fall","kind":"snow","notes":["lighting","tinted","manual","timed","dynamic"]},"minecraft:water_evaporation_manual":{"id":"minecraft:water_evaporation_manual","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"liquid","notes":["lighting","tinted","flipbook","collision","manual","timed","dynamic"]},"minecraft:falling_dust_concrete_powder_particle":{"id":"minecraft:falling_dust_concrete_powder_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:colored_flame_particle":{"id":"minecraft:colored_flame_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,24],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"sphere","motion":"idle","kind":"fire","notes":["tinted","instant","once"]},"minecraft:weaving_ambient":{"id":"minecraft:weaving_ambient","texture":"textures/blocks/web","material":"particles_blend","uv":[{"expression":"Math.round(variable.particle_random_1 * 12.0)","version":12},{"expression":"Math.round(variable.particle_random_2 * 12.0)","version":12}],"uv_size":[4,4],"tex_size":[16,16],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","collision","instant","dynamic"]},"minecraft:conduit_attack_emitter":{"id":"minecraft:conduit_attack_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_2 * 11) * 8","version":0},104],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","instant","once"]},"minecraft:spore_blossom_shower_particle":{"id":"minecraft:spore_blossom_shower_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"box","motion":"idle","kind":"ambient","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:sponge_absorb_water_particle":{"id":"minecraft:sponge_absorb_water_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"liquid","notes":["lighting","instant","once","dynamic"]},"minecraft:phantom_trail_particle":{"id":"minecraft:phantom_trail_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"trail","notes":["lighting","tinted","timed","dynamic"]},"minecraft:endrod":{"id":"minecraft:endrod","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"misc","notes":["tinted","flipbook","manual","timed","dynamic"]},"minecraft:white_smoke_particle":{"id":"minecraft:white_smoke_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"disc","motion":"idle","kind":"smoke","notes":["lighting","tinted","flipbook","manual","timed","dynamic"]},"minecraft:huge_explosion_emitter":{"id":"minecraft:huge_explosion_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["tinted","flipbook"]},"minecraft:obsidian_glow_dust_particle":{"id":"minecraft:obsidian_glow_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","collision","instant","timed","dynamic"]},"minecraft:basic_flame_particle":{"id":"minecraft:basic_flame_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,24],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"sphere","motion":"idle","kind":"fire","notes":["manual","timed"]},"minecraft:mob_portal":{"id":"minecraft:mob_portal","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_3*8)*8","version":0},0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"magic","notes":["tinted","manual","timed","dynamic"]},"minecraft:creaking_crumble_body":{"id":"minecraft:creaking_crumble_body","texture":"textures/blocks/pale_oak_log_side","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_1 * 12.0)","version":12},{"expression":"Math.round(variable.particle_random_2 * 12.0)","version":12}],"uv_size":[4,4],"tex_size":[16,16],"flipbook":false,"shape":"box","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:sulfur_cube_goo":{"id":"minecraft:sulfur_cube_goo","texture":"textures/particle/sulfur_cube_goo","material":"particles_alpha","uv":["4 * (variable.particle_random_1*3)","4 * (variable.particle_random_2*3)"],"uv_size":["4","4"],"tex_size":[16,16],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:sculk_sensor_redstone_particle":{"id":"minecraft:sculk_sensor_redstone_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"magic","notes":["lighting","tinted","flipbook","collision","instant","timed","dynamic"]},"minecraft:cauldron_spell_emitter":{"id":"minecraft:cauldron_spell_emitter","texture":"textures/particle/particles","material":"particles_blend","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:portal_north_south":{"id":"minecraft:portal_north_south","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_3*8)*8","version":0},0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"magic","notes":["tinted","instant","timed","dynamic"]},"minecraft:conduit_absorb_particle":{"id":"minecraft:conduit_absorb_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_2 * 11) * 8","version":0},104],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","instant","once"]},"minecraft:lab_table_heatblock_dust_particle":{"id":"minecraft:lab_table_heatblock_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","instant","once","dynamic"]},"minecraft:rain_splash_particle":{"id":"minecraft:rain_splash_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[{"expression":"24+Math.Round(variable.particle_random_1*3.0)*8","version":4},8],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"smoke","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:eyeblossom_close":{"id":"minecraft:eyeblossom_close","texture":"textures/particle/pixel","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["tinted","instant","once","dynamic"]},"minecraft:wax_particle":{"id":"minecraft:wax_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,48],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["tinted","instant","once","dynamic"]},"minecraft:bubble_column_bubble":{"id":"minecraft:bubble_column_bubble","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","tinted","instant","once","dynamic"]},"minecraft:redstone_wire_dust_particle":{"id":"minecraft:redstone_wire_dust_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","collision","instant","timed","dynamic"]},"minecraft:trial_omen_emitter":{"id":"minecraft:trial_omen_emitter","texture":"textures/particle/trial_omen","material":"particles_alpha","uv":[0,0],"uv_size":[16,16],"tex_size":[16,16],"flipbook":false,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:villager_angry":{"id":"minecraft:villager_angry","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,40],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["lighting","manual","timed","dynamic"]},"minecraft:sparkler_emitter":{"id":"minecraft:sparkler_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"spark","notes":["tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:note_particle":{"id":"minecraft:note_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,32],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"sphere","motion":"idle","kind":"ambient","notes":["lighting","tinted","instant","once","dynamic"]},"minecraft:raid_omen_ambient":{"id":"minecraft:raid_omen_ambient","texture":"textures/particle/raid_omen","material":"particles_blend","uv":[0,0],"uv_size":[16,16],"tex_size":[16,16],"flipbook":false,"shape":"custom","motion":"idle","kind":"misc","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:basic_bubble_particle_manual":{"id":"minecraft:basic_bubble_particle_manual","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","manual","timed","dynamic"]},"minecraft:evocation_fang_particle":{"id":"minecraft:evocation_fang_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:obsidian_tear_particle":{"id":"minecraft:obsidian_tear_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:falling_dust_sand_particle":{"id":"minecraft:falling_dust_sand_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"point","motion":"fall","kind":"dust","notes":["lighting","tinted","flipbook","instant","once","dynamic"]},"minecraft:death_explosion_emitter":{"id":"minecraft:death_explosion_emitter","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"burst","kind":"impact","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:squid_ink_bubble":{"id":"minecraft:squid_ink_bubble","texture":"textures/particle/particles","material":"particles_alpha","uv":[16,16],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"point","motion":"idle","kind":"bubble","notes":["lighting","tinted","instant","once","dynamic"]},"minecraft:eyeblossom_open":{"id":"minecraft:eyeblossom_open","texture":"textures/particle/pixel","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":null,"flipbook":false,"shape":"point","motion":"idle","kind":"misc","notes":["tinted","instant","once","dynamic"]},"minecraft:pale_oak_leaves_particle":{"id":"minecraft:pale_oak_leaves_particle","texture":"textures/particle/pale_oak_leaves_atlas","material":"particles_alpha","uv":[{"expression":"math.floor(v.particle_random_1 * 4) * 7","version":12},{"expression":"math.floor(v.particle_random_2 * 3) * 7","version":12}],"uv_size":[7,7],"tex_size":[27,21],"flipbook":false,"shape":"box","motion":"idle","kind":"ambient","notes":["lighting","tinted","collision","manual","timed","dynamic"]},"minecraft:infested_emitter":{"id":"minecraft:infested_emitter","texture":"textures/particle/infested","material":"particles_alpha","uv":[0,0],"uv_size":[16,16],"tex_size":[16,16],"flipbook":false,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","collision","instant","once","dynamic"]},"minecraft:weaving_emitter":{"id":"minecraft:weaving_emitter","texture":"textures/blocks/web","material":"particles_alpha","uv":[{"expression":"Math.round(variable.particle_random_1 * 12.0)","version":12},{"expression":"Math.round(variable.particle_random_2 * 12.0)","version":12}],"uv_size":[4,4],"tex_size":[16,16],"flipbook":false,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","collision","instant","dynamic"]},"minecraft:wither_boss_invulnerable":{"id":"minecraft:wither_boss_invulnerable","texture":"textures/particle/particles","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":[128,128],"flipbook":true,"shape":"custom","motion":"idle","kind":"misc","notes":["lighting","tinted","flipbook","collision","instant","once","dynamic"]},"minecraft:mobflame_emitter":{"id":"minecraft:mobflame_emitter","texture":"textures/flame_atlas","material":"particles_alpha","uv":[0,0],"uv_size":[1,1],"tex_size":null,"flipbook":true,"shape":"entity_aabb","motion":"idle","kind":"fire","notes":["flipbook","timed","dynamic"]},"minecraft:spore_blossom_ambient_particle":{"id":"minecraft:spore_blossom_ambient_particle","texture":"textures/particle/particles","material":"particles_alpha","uv":[8,56],"uv_size":[8,8],"tex_size":[128,128],"flipbook":false,"shape":"custom","motion":"idle","kind":"ambient","notes":["lighting","tinted","manual","timed","dynamic"]},"minecraft:noxious_gas_particle":{"id":"minecraft:noxious_gas_particle","texture":"textures/particle/noxious_gas","material":"particles_blend","uv":null,"uv_size":null,"tex_size":[16,128],"flipbook":true,"shape":"point","motion":"idle","kind":"ambient","notes":["lighting","tinted","flipbook","instant","once","dynamic"]}};
const PARTICLE_IDS = Object.keys(PARTICLE_CATALOG).sort();

const STATE = {
  rawOBJ: '',
  rawMTL: '',
  model: null,
  materials: new Map(),
  textures: new Map(),
  textureSources: new Map(),
  texturePixels: new Map(),
  samplePoints: [],
  commands: [],
  dirty: true,
  animTime: 0,
  lastFrame: 0,
  playing: true,
  camera1: { yaw: -0.72, pitch: 0.45, zoom: 1 },
  camera2: { yaw: -0.82, pitch: 0.38, zoom: 1.05 },
  drag: null,
  commandPreviewMode: 'local',
};

const UI = {
  modelFiles: document.getElementById('modelFiles'),
  objText: document.getElementById('objText'),
  mtlText: document.getElementById('mtlText'),
  loadBtn: document.getElementById('loadBtn'),
  sampleBtn: document.getElementById('sampleBtn'),
  clearFilesBtn: document.getElementById('clearFilesBtn'),
  scale: document.getElementById('scale'),
  rotX: document.getElementById('rotX'),
  rotY: document.getElementById('rotY'),
  rotZ: document.getElementById('rotZ'),
  offX: document.getElementById('offX'),
  offY: document.getElementById('offY'),
  offZ: document.getElementById('offZ'),
  anchor: document.getElementById('anchor'),
  mode: document.getElementById('mode'),
  spacing: document.getElementById('spacing'),
  maxParticles: document.getElementById('maxParticles'),
  smoothness: document.getElementById('smoothness'),
  particleScale: document.getElementById('particleScale'),
  particleSearch: document.getElementById('particleSearch'),
  selector: document.getElementById('selector'),
  useLocalCoords: document.getElementById('useLocalCoords'),
  onePerLine: document.getElementById('onePerLine'),
  exportBtn: document.getElementById('exportBtn'),
  copyBtn: document.getElementById('copyBtn'),
  downloadBtn: document.getElementById('downloadBtn'),
  output: document.getElementById('output'),
  commandInfo: document.getElementById('commandInfo'),
  stats: document.getElementById('stats'),
  particleList: document.getElementById('particleList'),
  particleName: document.getElementById('particleName'),
  particleMeta: document.getElementById('particleMeta'),
  particleNotes: document.getElementById('particleNotes'),
  spriteCanvas: document.getElementById('spriteCanvas'),
  sceneCanvas: document.getElementById('sceneCanvas'),
  gameCanvas: document.getElementById('gameCanvas'),
  modelPreviewInfo: document.getElementById('modelPreviewInfo'),
  gamePreviewInfo: document.getElementById('gamePreviewInfo'),
  dropzone: document.getElementById('dropzone'),
  clearFilesBtn: document.getElementById('clearFilesBtn'),
};


const SPRITE_CTX = UI.spriteCanvas.getContext('2d', { alpha: true });
const SCENE_CTX = UI.sceneCanvas.getContext('2d', { alpha: true });
const GAME_CTX = UI.gameCanvas.getContext('2d', { alpha: true });


function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function rad(deg) { return deg * Math.PI / 180; }
function fmt(n) { return (Math.round(n * 1000) / 1000).toFixed(3); }
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function randSeed(seed) {
  let s = seed >>> 0;
  return function() {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return ((s >>> 0) / 4294967296);
  };
}
function vec(x=0,y=0,z=0){ return [x,y,z]; }
function add3(a,b){ return [a[0]+b[0],a[1]+b[1],a[2]+b[2]]; }
function sub3(a,b){ return [a[0]-b[0],a[1]-b[1],a[2]-b[2]]; }
function mul3(a,s){ return [a[0]*s,a[1]*s,a[2]*s]; }
function dot3(a,b){ return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; }
function cross3(a,b){ return [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]]; }
function len3(a){ return Math.hypot(a[0],a[1],a[2]); }
function norm3(a){ const l = len3(a) || 1; return [a[0]/l,a[1]/l,a[2]/l]; }
function lerp(a,b,t){ return a + (b-a)*t; }
function lerp3(a,b,t){ return [lerp(a[0],b[0],t), lerp(a[1],b[1],t), lerp(a[2],b[2],t)]; }
function mixColor(a,b,t){ return [lerp(a[0],b[0],t), lerp(a[1],b[1],t), lerp(a[2],b[2],t), lerp(a[3],b[3],t)]; }
function escapeHTML(s) {
  return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}
function resolveIndex(idx, arr) {
  if (!Number.isFinite(idx)) return null;
  if (idx > 0) return idx - 1;
  if (idx < 0) return arr.length + idx;
  return null;
}
function pivotFor(bounds, anchor) {
  switch (anchor) {
    case 'center': return bounds.center;
    case 'bottom': return [(bounds.min[0]+bounds.max[0])/2, bounds.min[1], (bounds.min[2]+bounds.max[2])/2];
    case 'min': return bounds.min;
    default: return [0,0,0];
  }
}
function rotateXYZ(p, rx, ry, rz) {
  let [x,y,z] = p;
  let c = Math.cos(rx), s = Math.sin(rx);
  [y,z] = [y*c - z*s, y*s + z*c];
  c = Math.cos(ry); s = Math.sin(ry);
  [x,z] = [x*c + z*s, -x*s + z*c];
  c = Math.cos(rz); s = Math.sin(rz);
  [x,y] = [x*c - y*s, x*s + y*c];
  return [x,y,z];
}
function transformPoint(p, s, bounds) {
  const pivot = pivotFor(bounds, s.anchor);
  let q = sub3(p, pivot);
  q = rotateXYZ(q, s.rx, s.ry, s.rz);
  q = mul3(q, s.scale);
  q = add3(q, [s.ox, s.oy, s.oz]);
  q = add3(q, pivot);
  return q;
}
function computeBounds(verts) {
  const min = [Infinity,Infinity,Infinity];
  const max = [-Infinity,-Infinity,-Infinity];
  for (const v of verts) {
    for (let i = 0; i < 3; i++) {
      if (v[i] < min[i]) min[i] = v[i];
      if (v[i] > max[i]) max[i] = v[i];
    }
  }
  if (!verts.length) {
    return { min:[0,0,0], max:[0,0,0], center:[0,0,0], size:[0,0,0] };
  }
  const center = [(min[0]+max[0])/2, (min[1]+max[1])/2, (min[2]+max[2])/2];
  return { min, max, center, size:[max[0]-min[0], max[1]-min[1], max[2]-min[2]] };
}


function parseOBJ(text) {
  const vertices = [];
  const texcoords = [];
  const normals = [];
  const faces = [];
  const mtllibs = [];
  let currentMaterial = '';
  const lines = String(text || '').split(/\r?\n/);

  for (let raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split(/\s+/);
    const type = parts[0];

    if (type === 'v' && parts.length >= 4) {
      vertices.push([parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])]);
    } else if (type === 'vt' && parts.length >= 3) {
      texcoords.push([parseFloat(parts[1]) || 0, parseFloat(parts[2]) || 0]);
    } else if (type === 'vn' && parts.length >= 4) {
      normals.push([parseFloat(parts[1]) || 0, parseFloat(parts[2]) || 0, parseFloat(parts[3]) || 0]);
    } else if (type === 'mtllib' && parts.length >= 2) {
      mtllibs.push(parts.slice(1).join(' '));
    } else if (type === 'usemtl' && parts.length >= 2) {
      currentMaterial = parts.slice(1).join(' ');
    } else if (type === 'f' && parts.length >= 4) {
      const refs = parts.slice(1).map(tok => {
        const [v, t, n] = tok.split('/');
        return {
          v: parseInt(v, 10),
          t: t ? parseInt(t, 10) : null,
          n: n ? parseInt(n, 10) : null,
        };
      }).filter(r => Number.isFinite(r.v));
      if (refs.length >= 3) faces.push({ refs, material: currentMaterial });
    }
  }

  if (!vertices.length) throw new Error('El OBJ no tiene vértices válidos.');

  const bounds = computeBounds(vertices);
  const triangles = [];
  for (const face of faces) {
    for (let i = 1; i < face.refs.length - 1; i++) {
      triangles.push({
        a: face.refs[0],
        b: face.refs[i],
        c: face.refs[i + 1],
        material: face.material || '',
      });
    }
  }

  return { vertices, texcoords, normals, faces, triangles, mtllibs, bounds };
}

function parseMTL(text) {
  const materials = new Map();
  let current = null;
  const lines = String(text || '').split(/\r?\n/);

  for (let raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split(/\s+/);
    const type = parts[0];

    if (type === 'newmtl') {
      current = {
        name: parts.slice(1).join(' '),
        Kd: [1, 1, 1],
        Ka: [0, 0, 0],
        Ks: [0, 0, 0],
        Ke: [0, 0, 0],
        Ns: 0,
        d: 1,
        map_Kd: '',
      };
      materials.set(current.name, current);
    } else if (!current) {
      continue;
    } else if (type === 'Kd' && parts.length >= 4) {
      current.Kd = [parseFloat(parts[1]) || 1, parseFloat(parts[2]) || 1, parseFloat(parts[3]) || 1];
    } else if (type === 'Ka' && parts.length >= 4) {
      current.Ka = [parseFloat(parts[1]) || 0, parseFloat(parts[2]) || 0, parseFloat(parts[3]) || 0];
    } else if (type === 'Ks' && parts.length >= 4) {
      current.Ks = [parseFloat(parts[1]) || 0, parseFloat(parts[2]) || 0, parseFloat(parts[3]) || 0];
    } else if (type === 'Ke' && parts.length >= 4) {
      current.Ke = [parseFloat(parts[1]) || 0, parseFloat(parts[2]) || 0, parseFloat(parts[3]) || 0];
    } else if (type === 'Ns' && parts.length >= 2) {
      current.Ns = parseFloat(parts[1]) || 0;
    } else if (type === 'd' && parts.length >= 2) {
      current.d = parseFloat(parts[1]) || 1;
    } else if (type === 'Tr' && parts.length >= 2) {
      current.d = 1 - (parseFloat(parts[1]) || 0);
    } else if (type === 'map_Kd' && parts.length >= 2) {
      current.map_Kd = parts.slice(1).join(' ');
    }
  }

  return materials;
}


function normalizePath(path) {
  return String(path || '').replace(/\\/g, '/').trim();
}
function basename(path) {
  const p = normalizePath(path);
  return p.split('/').pop().toLowerCase();
}
function extname(path) {
  const b = basename(path);
  const idx = b.lastIndexOf('.');
  return idx >= 0 ? b.slice(idx + 1) : '';
}
function stripQuotes(s) {
  return String(s || '').replace(/^['"]|['"]$/g, '');
}


async function fileToArrayBuffer(file) {
  return await file.arrayBuffer();
}

async function loadRasterFromFile(file) {
  const ext = extname(file.name);
  if (ext === 'tga') {
    const buf = await fileToArrayBuffer(file);
    return decodeTGA(buf);
  }
  const url = await fileToDataURL(file);
  return await loadImageToCanvas(url);
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function loadImageToCanvas(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      resolve({ canvas, pixels, width: canvas.width, height: canvas.height, source: src });
    };
    img.onerror = reject;
    img.src = src;
  });
}

function decodeTGA(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  const idLength = view.getUint8(0);
  const colorMapType = view.getUint8(1);
  const imageType = view.getUint8(2);
  if (colorMapType !== 0 || (imageType !== 2 && imageType !== 3)) {
    throw new Error('TGA no soportado: solo true-color sin paleta.');
  }
  const width = view.getUint16(12, true);
  const height = view.getUint16(14, true);
  const pixelDepth = view.getUint8(16);
  const descriptor = view.getUint8(17);
  const originTop = (descriptor & 0x20) !== 0;
  const bytesPerPixel = pixelDepth >> 3;
  if (![3, 4].includes(bytesPerPixel)) {
    throw new Error('TGA no soportado: se esperaban 24 o 32 bits.');
  }
  const offset = 18 + idLength;
  const pixels = new Uint8ClampedArray(width * height * 4);
  let p = offset;
  for (let y = 0; y < height; y++) {
    const row = originTop ? y : (height - 1 - y);
    for (let x = 0; x < width; x++) {
      const b = view.getUint8(p++);
      const g = view.getUint8(p++);
      const r = view.getUint8(p++);
      const a = bytesPerPixel === 4 ? view.getUint8(p++) : 255;
      const i = (row * width + x) * 4;
      pixels[i] = r; pixels[i + 1] = g; pixels[i + 2] = b; pixels[i + 3] = a;
    }
  }
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.putImageData(new ImageData(pixels, width, height), 0, 0);
  return { canvas, pixels: ctx.getImageData(0, 0, width, height), width, height, source: 'tga' };
}


function sampleTexture(texture, u, v) {
  if (!texture || !texture.pixels) return null;
  if (!Number.isFinite(u) || !Number.isFinite(v)) return null;
  u = ((u % 1) + 1) % 1;
  v = ((v % 1) + 1) % 1;
  const x = clamp(Math.floor(u * (texture.width - 1)), 0, texture.width - 1);
  const y = clamp(Math.floor((1 - v) * (texture.height - 1)), 0, texture.height - 1);
  const idx = (y * texture.width + x) * 4;
  const d = texture.pixels.data;
  return [d[idx], d[idx + 1], d[idx + 2], d[idx + 3] / 255];
}

function colorToCSS(rgba, fallbackAlpha = 1) {
  if (!rgba) return `rgba(255,255,255,${fallbackAlpha})`;
  const [r, g, b, a] = rgba;
  return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a != null ? a : fallbackAlpha})`;
}


function getTextureByName(name) {
  const key = basename(name);
  return STATE.textures.get(key) || STATE.textures.get(normalizePath(name).toLowerCase()) || null;
}

function resolveMaterial(materialName) {
  return STATE.materials.get(materialName) || null;
}

function resolveMaterialTexture(material) {
  if (!material || !material.map_Kd) return null;
  const path = stripQuotes(normalizePath(material.map_Kd));
  const base = basename(path);
  return STATE.textures.get(base) || STATE.textures.get(path.toLowerCase()) || null;
}


function triangulateModel(model) {
  const tris = [];
  for (const tri of model.triangles) {
    tris.push({
      material: tri.material,
      v: [tri.a.v, tri.b.v, tri.c.v],
      t: [tri.a.t, tri.b.t, tri.c.t],
      n: [tri.a.n, tri.b.n, tri.c.n],
    });
  }
  model.tris = tris;
  return model;
}

function buildModelFromText(objText, mtlText) {
  const model = parseOBJ(objText);
  const matMap = parseMTL(mtlText);
  STATE.materials = matMap;
  triangulateModel(model);
  STATE.model = model;
  STATE.rawOBJ = objText;
  STATE.rawMTL = mtlText;
  STATE.dirty = true;
  rebuildSamplePoints();
  refreshParticleInfo();
  updateStatsAndOutput();
}


function sampleTriangle(a, b, c, uvA, uvB, uvC, n, materialName, texture) {
  const pts = [];
  const area = len3(cross3(sub3(b, a), sub3(c, a))) / 2;
  const count = Math.max(1, Math.ceil(area / Math.max(0.0001, n * n)));
  const steps = Math.max(1, Math.ceil(Math.sqrt(count)));
  const normal = norm3(cross3(sub3(b, a), sub3(c, a)));
  for (let i = 0; i <= steps; i++) {
    for (let j = 0; j <= steps - i; j++) {
      const u = i / steps;
      const v = j / steps;
      const w = 1 - u - v;
      const pos = [
        a[0] * w + b[0] * u + c[0] * v,
        a[1] * w + b[1] * u + c[1] * v,
        a[2] * w + b[2] * u + c[2] * v,
      ];
      const uv = uvA && uvB && uvC ? [
        uvA[0] * w + uvB[0] * u + uvC[0] * v,
        uvA[1] * w + uvB[1] * u + uvC[1] * v,
      ] : null;
      pts.push({ pos, normal, uv, materialName, texture });
    }
  }
  return pts;
}

function sampleEdge(a, b, uvA, uvB, spacing, materialName, texture) {
  const pts = [];
  const dist = len3(sub3(b, a));
  const steps = Math.max(1, Math.ceil(dist / Math.max(0.0001, spacing)));
  const normal = norm3(cross3([0, 1, 0], sub3(b, a)));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const pos = lerp3(a, b, t);
    const uv = uvA && uvB ? [lerp(uvA[0], uvB[0], t), lerp(uvA[1], uvB[1], t)] : null;
    pts.push({ pos, normal, uv, materialName, texture });
  }
  return pts;
}

function uniquePointKey(p, precision = 4) {
  return [
    Math.round(p.pos[0] * precision),
    Math.round(p.pos[1] * precision),
    Math.round(p.pos[2] * precision),
    Math.round((p.uv?.[0] ?? 0) * 100),
    Math.round((p.uv?.[1] ?? 0) * 100),
  ].join('|');
}


function rebuildSamplePoints() {
  if (!STATE.model) {
    STATE.samplePoints = [];
    return;
  }
  const s = getSettings();
  const model = STATE.model;
  const out = [];
  const seen = new Set();

  const addPoint = p => {
    const key = uniquePointKey(p);
    if (seen.has(key)) return;
    seen.add(key);
    out.push(p);
  };

  for (const tri of model.tris) {
    const ia = resolveIndex(tri.v[0], model.vertices);
    const ib = resolveIndex(tri.v[1], model.vertices);
    const ic = resolveIndex(tri.v[2], model.vertices);
    const a = model.vertices[ia];
    const b = model.vertices[ib];
    const c = model.vertices[ic];
    const uvA = tri.t[0] ? model.texcoords[resolveIndex(tri.t[0], model.texcoords)] : null;
    const uvB = tri.t[1] ? model.texcoords[resolveIndex(tri.t[1], model.texcoords)] : null;
    const uvC = tri.t[2] ? model.texcoords[resolveIndex(tri.t[2], model.texcoords)] : null;
    const material = resolveMaterial(tri.material);
    const texture = resolveMaterialTexture(material);

    if (s.mode === 'vertices' || s.mode === 'all') {
      addPoint({ pos: a, normal: [0,0,1], uv: uvA || null, materialName: tri.material, texture });
      addPoint({ pos: b, normal: [0,0,1], uv: uvB || null, materialName: tri.material, texture });
      addPoint({ pos: c, normal: [0,0,1], uv: uvC || null, materialName: tri.material, texture });
    }
    if (s.mode === 'edges' || s.mode === 'all') {
      for (const p of sampleEdge(a, b, uvA, uvB, s.spacing, tri.material, texture)) addPoint(p);
      for (const p of sampleEdge(b, c, uvB, uvC, s.spacing, tri.material, texture)) addPoint(p);
      for (const p of sampleEdge(c, a, uvC, uvA, s.spacing, tri.material, texture)) addPoint(p);
    }
    if (s.mode === 'surface' || s.mode === 'all') {
      for (const p of sampleTriangle(a, b, c, uvA, uvB, uvC, s.spacing, tri.material, texture)) addPoint(p);
    }
  }

  const transformed = out.map(p => {
    const pos = transformPoint(p.pos, s, model.bounds);
    return { ...p, pos };
  });

  STATE.samplePoints = transformed.slice(0, s.maxParticles);
}


function getSettings() {
  return {
    scale: parseFloat(UI.scale.value) || 1,
    rx: rad(parseFloat(UI.rotX.value) || 0),
    ry: rad(parseFloat(UI.rotY.value) || 0),
    rz: rad(parseFloat(UI.rotZ.value) || 0),
    ox: parseFloat(UI.offX.value) || 0,
    oy: parseFloat(UI.offY.value) || 0,
    oz: parseFloat(UI.offZ.value) || 0,
    anchor: UI.anchor.value,
    mode: UI.mode.value,
    spacing: Math.max(0.001, parseFloat(UI.spacing.value) || 0.14),
    maxParticles: Math.max(1, parseInt(UI.maxParticles.value, 10) || 7000),
    smoothness: clamp(parseInt(UI.smoothness.value, 10) || 1, 1, 4),
    particleScale: Math.max(0.05, parseFloat(UI.particleScale.value) || 1),
    particle: sanitizeParticleId(UI.particleSearch.value),
    selector: (UI.selector.value || '@s').trim() || '@s',
    useLocalCoords: UI.useLocalCoords.checked,
    onePerLine: UI.onePerLine.checked,
  };
}

function sanitizeParticleId(id) {
  const t = String(id || '').trim();
  if (!t) return 'minecraft:basic_flame_particle';
  return t.includes(':') ? t : `minecraft:${t}`;
}


function buildCommands() {
  if (!STATE.model) {
    STATE.commands = [];
    UI.output.value = '';
    UI.commandInfo.textContent = '0 líneas';
    return [];
  }
  const s = getSettings();
  const points = STATE.samplePoints;
  const lines = [];
  const particleId = s.particle;

  if (s.useLocalCoords) {
    const prefix = `execute as ${s.selector} at @s rotated as @s run particle ${particleId}`;
    for (const p of points) {
      const x = fmt((p.pos[0] + 0));
      const y = fmt((p.pos[1] + 0));
      const z = fmt((p.pos[2] + 0));
      lines.push(`${prefix} ^${x} ^${y} ^${z}`);
    }
  } else {
    for (const p of points) {
      lines.push(`/particle ${particleId} ${fmt(p.pos[0])} ${fmt(p.pos[1])} ${fmt(p.pos[2])}`);
    }
  }

  STATE.commands = lines;
  UI.output.value = lines.join('\n');
  UI.commandInfo.textContent = `${lines.length} líneas`;
  return lines;
}


function updateStatsAndOutput() {
  if (!STATE.model) {
    UI.stats.innerHTML = '';
    UI.output.value = '';
    UI.commandInfo.textContent = '0 líneas';
    UI.modelPreviewInfo.textContent = 'Sin modelo cargado';
    UI.gamePreviewInfo.textContent = 'Esperando datos';
    renderAll();
    return;
  }
  const model = STATE.model;
  const commands = buildCommands();
  const size = model.bounds.size;
  const estChars = commands.reduce((sum, line) => sum + line.length + 1, 0);
  const items = [
    ['Vértices', model.vertices.length],
    ['Triángulos', model.tris.length],
    ['Puntos', STATE.samplePoints.length],
    ['Líneas', commands.length],
    ['Ancho', fmt(size[0])],
    ['Alto', fmt(size[1])],
    ['Fondo', fmt(size[2])],
    ['Texto', estChars],
  ];
  UI.stats.innerHTML = items.map(([k, v]) => `<div class="stat"><div class="k">${k}</div><div class="v">${escapeHTML(v)}</div></div>`).join('');
  UI.modelPreviewInfo.textContent = `${model.vertices.length} vértices · ${model.tris.length} tris`;
  UI.gamePreviewInfo.textContent = `${STATE.samplePoints.length} puntos · ${getSettings().particle}`;
  renderAll();
}


function shadeColor(rgba, factor) {
  if (!rgba) return [255,255,255,1];
  const a = rgba[3] ?? 1;
  return [clamp(rgba[0] * factor, 0, 255), clamp(rgba[1] * factor, 0, 255), clamp(rgba[2] * factor, 0, 255), a];
}

function computeFaceNormal(tri, model) {
  const ia = resolveIndex(tri.v[0], model.vertices);
  const ib = resolveIndex(tri.v[1], model.vertices);
  const ic = resolveIndex(tri.v[2], model.vertices);
  const a = model.vertices[ia];
  const b = model.vertices[ib];
  const c = model.vertices[ic];
  return norm3(cross3(sub3(b, a), sub3(c, a)));
}

function projectPoint(p, cam, canvas) {
  const dx = p[0] - cam.target[0];
  const dy = p[1] - cam.target[1];
  const dz = p[2] - cam.target[2];
  const cy = Math.cos(-cam.yaw), sy = Math.sin(-cam.yaw);
  let x1 = dx * cy - dz * sy;
  let z1 = dx * sy + dz * cy;
  const cp = Math.cos(-cam.pitch), sp = Math.sin(-cam.pitch);
  let y2 = dy * cp - z1 * sp;
  let z2 = dy * sp + z1 * cp;
  const dist = cam.distance;
  const persp = cam.fov / (cam.fov + z2 + dist);
  return {
    x: canvas.clientWidth / 2 + x1 * persp * cam.scale,
    y: canvas.clientHeight / 2 - y2 * persp * cam.scale,
    z: z2,
    persp,
  };
}


function perspectiveCamera(model, cam, canvas) {
  const radius = Math.max(model.bounds.size[0], model.bounds.size[1], model.bounds.size[2]) || 1;
  return {
    target: model.bounds.center,
    yaw: cam.yaw,
    pitch: clamp(cam.pitch, -1.45, 1.45),
    distance: radius * (3.2 / cam.zoom) + 1.2,
    fov: 2.3,
    scale: Math.min(canvas.clientWidth, canvas.clientHeight) * 0.95 / (radius * 2.45),
  };
}


function affineMatrixFromTriangles(sx1, sy1, sx2, sy2, sx3, sy3, dx1, dy1, dx2, dy2, dx3, dy3) {
  const det = sx1 * (sy2 - sy3) + sx2 * (sy3 - sy1) + sx3 * (sy1 - sy2);
  if (Math.abs(det) < 1e-8) return null;
  const a = (dx1 * (sy2 - sy3) + dx2 * (sy3 - sy1) + dx3 * (sy1 - sy2)) / det;
  const b = (dy1 * (sy2 - sy3) + dy2 * (sy3 - sy1) + dy3 * (sy1 - sy2)) / det;
  const c = (dx1 * (sx3 - sx2) + dx2 * (sx1 - sx3) + dx3 * (sx2 - sx1)) / det;
  const d = (dy1 * (sx3 - sx2) + dy2 * (sx1 - sx3) + dy3 * (sx2 - sx1)) / det;
  const e = (dx1 * (sx2 * sy3 - sx3 * sy2) + dx2 * (sx3 * sy1 - sx1 * sy3) + dx3 * (sx1 * sy2 - sx2 * sy1)) / det;
  const f = (dy1 * (sx2 * sy3 - sx3 * sy2) + dy2 * (sx3 * sy1 - sx1 * sy3) + dy3 * (sx1 * sy2 - sx2 * sy1)) / det;
  return [a, b, c, d, e, f];
}

function drawTexturedTriangle(ctx, texture, src, dst, brightness = 1, alpha = 1) {
  const [sx1, sy1, sx2, sy2, sx3, sy3] = src;
  const [dx1, dy1, dx2, dy2, dx3, dy3] = dst;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(dx1, dy1);
  ctx.lineTo(dx2, dy2);
  ctx.lineTo(dx3, dy3);
  ctx.closePath();
  ctx.clip();
  const m = affineMatrixFromTriangles(0, 0, texture.width, 0, 0, texture.height, sx1, sy1, sx2, sy2, sx3, sy3);
  if (!m) {
    ctx.restore();
    return;
  }
  ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
  ctx.globalAlpha = alpha;
  ctx.drawImage(texture.canvas, 0, 0);
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(dx1, dy1);
  ctx.lineTo(dx2, dy2);
  ctx.lineTo(dx3, dy3);
  ctx.closePath();
  ctx.clip();
  ctx.globalCompositeOperation = 'source-atop';
  ctx.fillStyle = brightness < 1 ? `rgba(0,0,0,${(1 - brightness) * 0.72})` : `rgba(255,255,255,${(brightness - 1) * 0.18})`;
  ctx.fillRect(Math.min(dx1, dx2, dx3) - 2, Math.min(dy1, dy2, dy3) - 2, Math.abs(dx1 - dx2) + Math.abs(dx3 - dx1) + 8, Math.abs(dy1 - dy2) + Math.abs(dy3 - dy1) + 8);
  ctx.restore();
}


function drawFlatTriangle(ctx, pts, fill, alpha = 1) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  ctx.lineTo(pts[1].x, pts[1].y);
  ctx.lineTo(pts[2].x, pts[2].y);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.globalAlpha = alpha;
  ctx.fill();
  ctx.restore();
}


function drawBackground(ctx, w, h, game = false) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  if (game) {
    grad.addColorStop(0, '#78aee8');
    grad.addColorStop(0.55, '#98c7ef');
    grad.addColorStop(1, '#2c3439');
  } else {
    grad.addColorStop(0, '#121a2a');
    grad.addColorStop(0.55, '#09111b');
    grad.addColorStop(1, '#050a10');
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
  if (game) {
    ctx.fillStyle = 'rgba(255,255,255,.06)';
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
  }
}


function drawGrid(ctx, w, h, game = false) {
  ctx.save();
  ctx.strokeStyle = game ? 'rgba(255,255,255,.05)' : 'rgba(255,255,255,.04)';
  ctx.lineWidth = 1;
  const step = game ? 60 : 48;
  for (let x = 0; x <= w; x += step) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y <= h; y += step) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  ctx.restore();
}


function drawAxes(ctx, origin, cam, canvas) {
  const axes = [
    { dir: [1,0,0], color: 'rgba(124,196,255,.9)', label: 'X' },
    { dir: [0,1,0], color: 'rgba(133,240,184,.9)', label: 'Y' },
    { dir: [0,0,1], color: 'rgba(255,201,124,.9)', label: 'Z' },
  ];
  const o = projectPoint(origin, cam, canvas);
  ctx.save();
  ctx.font = '700 12px system-ui';
  for (const a of axes) {
    const end = projectPoint(add3(origin, mul3(a.dir, 0.9)), cam, canvas);
    ctx.strokeStyle = a.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(o.x, o.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.fillStyle = a.color;
    ctx.fillText(a.label, end.x + 4, end.y + 4);
  }
  ctx.restore();
}


function materialForTri(tri) {
  return resolveMaterial(tri.material);
}

function faceSourceUV(tri, model) {
  const uvA = tri.t[0] ? model.texcoords[resolveIndex(tri.t[0], model.texcoords)] : null;
  const uvB = tri.t[1] ? model.texcoords[resolveIndex(tri.t[1], model.texcoords)] : null;
  const uvC = tri.t[2] ? model.texcoords[resolveIndex(tri.t[2], model.texcoords)] : null;
  return [uvA, uvB, uvC];
}


function renderScene(ctx, canvas, options = { game: false }) {
  const model = STATE.model;
  const w = canvas.width = canvas.clientWidth * devicePixelRatio;
  const h = canvas.height = canvas.clientHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  const cw = canvas.clientWidth;
  const ch = canvas.clientHeight;
  ctx.clearRect(0, 0, cw, ch);
  drawBackground(ctx, cw, ch, options.game);
  drawGrid(ctx, cw, ch, options.game);

  if (!model) {
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,.92)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 18px system-ui';
    ctx.fillText('Carga un OBJ para empezar', cw / 2, ch / 2 - 10);
    ctx.fillStyle = 'rgba(154,172,191,.92)';
    ctx.font = '14px system-ui';
    ctx.fillText('La vista previa mostrará el modelo con textura, iluminación y partículas.', cw / 2, ch / 2 + 18);
    ctx.restore();
    return;
  }

  const camBase = options.game ? STATE.camera2 : STATE.camera1;
  const cam = perspectiveCamera(model, camBase, canvas);
  const transformed = model.vertices.map(v => transformPoint(v, getSettings(), model.bounds));
  const projected = transformed.map(v => projectPoint(v, cam, canvas));
  const lightDir = norm3([0.35, 0.92, 0.45]);
  const origin = transformPoint([0,0,0], getSettings(), model.bounds);

  drawAxes(ctx, origin, cam, canvas);

  const tris = model.tris.map((tri, idx) => {
    const ia = resolveIndex(tri.v[0], model.vertices);
    const ib = resolveIndex(tri.v[1], model.vertices);
    const ic = resolveIndex(tri.v[2], model.vertices);
    const a = transformed[ia], b = transformed[ib], c = transformed[ic];
    const pa = projected[ia], pb = projected[ib], pc = projected[ic];
    const normal = computeFaceNormal(tri, model);
    const brightness = clamp(0.33 + dot3(normal, lightDir) * 0.77, 0.15, 1.2);
    const depth = (pa.z + pb.z + pc.z) / 3;
    return { tri, a, b, c, pa, pb, pc, normal, brightness, depth };
  }).sort((x, y) => y.depth - x.depth);

  for (const f of tris) {
    const mat = materialForTri(f.tri);
    const texture = resolveMaterialTexture(mat);
    const uv = faceSourceUV(f.tri, model);
    const p1 = f.pa, p2 = f.pb, p3 = f.pc;

    if (texture && uv[0] && uv[1] && uv[2]) {
      const sx1 = uv[0][0] * texture.width;
      const sy1 = (1 - uv[0][1]) * texture.height;
      const sx2 = uv[1][0] * texture.width;
      const sy2 = (1 - uv[1][1]) * texture.height;
      const sx3 = uv[2][0] * texture.width;
      const sy3 = (1 - uv[2][1]) * texture.height;
      drawTexturedTriangle(ctx, texture, [sx1, sy1, sx2, sy2, sx3, sy3], [p1.x, p1.y, p2.x, p2.y, p3.x, p3.y], f.brightness, mat ? (mat.d ?? 1) : 1);
    } else {
      const base = mat && mat.Kd ? [mat.Kd[0] * 255, mat.Kd[1] * 255, mat.Kd[2] * 255, mat.d ?? 1] : [160, 190, 224, 1];
      const fill = `rgba(${Math.round(base[0])},${Math.round(base[1])},${Math.round(base[2])},${Math.min(1, base[3] * 0.95)})`;
      drawFlatTriangle(ctx, [p1, p2, p3], fill, 0.98);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.closePath();
      ctx.clip();
      ctx.fillStyle = `rgba(0,0,0,${(1 - f.brightness) * 0.45})`;
      ctx.fill();
      ctx.restore();
    }

    ctx.save();
    ctx.strokeStyle = `rgba(255,255,255,${0.06 + f.brightness * 0.03})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  if (options.game) {
    renderParticleOverlay(ctx, canvas, cam, transformed, projected, lightDir);
    drawGameHUD(ctx, canvas, model);
  }

  ctx.save();
  ctx.fillStyle = 'rgba(255,255,255,.92)';
  ctx.font = '600 12px ui-monospace,SFMono-Regular,Consolas,Monaco,monospace';
  ctx.fillText(`yaw ${camBase.yaw.toFixed(2)}  pitch ${camBase.pitch.toFixed(2)}  zoom ${camBase.zoom.toFixed(2)}`, 14, 18);
  ctx.restore();
}


function spritePreviewFrame(meta) {
  if (!meta) return null;
  const tex = (meta.texture || '').toLowerCase();
  if (!tex.includes('textures/particle/particles') || !meta.uv || !meta.uv_size || !meta.tex_size) return null;
  return {
    x: meta.uv[0],
    y: meta.uv[1],
    w: meta.uv_size[0],
    h: meta.uv_size[1],
    tw: meta.tex_size[0],
    th: meta.tex_size[1],
  };
}


function drawSpritePreview() {
  const meta = PARTICLE_CATALOG[sanitizeParticleId(UI.particleSearch.value)] || null;
  const ctx = SPRITE_CTX;
  const canvas = UI.spriteCanvas;
  const dpr = devicePixelRatio || 1;
  canvas.width = 128 * dpr;
  canvas.height = 128 * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, 128, 128);
  ctx.fillStyle = '#0b1019';
  ctx.fillRect(0, 0, 128, 128);
  const atlas = STATE.textureSources.get('bedrock_particle_atlas.png');
  const frame = spritePreviewFrame(meta);
  if (atlas && frame) {
    ctx.imageSmoothingEnabled = false;
    const sx = frame.x / frame.tw * atlas.width;
    const sy = frame.y / frame.th * atlas.height;
    const sw = frame.w / frame.tw * atlas.width;
    const sh = frame.h / frame.th * atlas.height;
    ctx.drawImage(atlas.canvas, sx, sy, sw, sh, 8, 8, 112, 112);
  } else {
    ctx.save();
    ctx.fillStyle = 'rgba(124,196,255,.14)';
    ctx.fillRect(12, 12, 104, 104);
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    ctx.font = '700 11px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Vista previa', 64, 58);
    ctx.fillStyle = 'rgba(154,172,191,.85)';
    ctx.font = '12px system-ui';
    ctx.fillText('sin atlas', 64, 74);
    ctx.restore();
  }
  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.strokeRect(0.5, 0.5, 127, 127);
}

function refreshParticleInfo() {
  const id = sanitizeParticleId(UI.particleSearch.value);
  const meta = PARTICLE_CATALOG[id] || null;
  const pretty = meta ? [
    `<div><b>Textura:</b> ${escapeHTML(meta.texture || 'desconocida')}</div>`,
    `<div><b>Forma:</b> ${escapeHTML(meta.shape || 'point')} · <b>Movimiento:</b> ${escapeHTML(meta.motion || 'idle')}</div>`,
    `<div><b>UV:</b> ${meta.uv ? meta.uv.join(', ') : '—'} · <b>Tamaño:</b> ${meta.uv_size ? meta.uv_size.join('×') : '—'}</div>`,
  ].join('') : '<div>No hay metadatos para esta partícula.</div>';
  UI.particleName.textContent = id;
  UI.particleMeta.innerHTML = pretty;
  const chips = [];
  if (meta) {
    chips.push(meta.kind || 'misc');
    chips.push(meta.motion || 'idle');
    if (meta.flipbook) chips.push('flipbook');
    if (meta.notes?.includes('tinted')) chips.push('tinted');
    if (meta.notes?.includes('collision')) chips.push('collision');
    if (meta.notes?.includes('lighting')) chips.push('lighting');
  }
  UI.particleNotes.innerHTML = chips.map((c, i) => `<span class="chip ${i === 0 ? 'good' : ''}">${escapeHTML(c)}</span>`).join('');
  drawSpritePreview();
}


function colorFromParticleMeta(id, point, time) {
  const meta = PARTICLE_CATALOG[id] || {};
  const seed = hashString(`${id}|${Math.round(point.pos[0] * 100)}|${Math.round(point.pos[1] * 100)}|${Math.round(point.pos[2] * 100)}`);
  const rnd = randSeed(seed + Math.floor(time * 1000));
  const tex = point.texture;
  if (tex && point.uv) {
    const c = sampleTexture(tex, point.uv[0], point.uv[1]);
    if (c) return c;
  }
  const kind = meta.kind || 'misc';
  const palette = {
    fire: [255, 165, 90, 0.96],
    smoke: [180, 190, 200, 0.58],
    bubble: [160, 220, 255, 0.75],
    magic: [185, 140, 255, 0.88],
    liquid: [115, 170, 255, 0.8],
    leaf: [136, 214, 120, 0.84],
    dust: [210, 190, 150, 0.78],
    impact: [255, 230, 130, 0.92],
    trail: [140, 230, 190, 0.86],
    cute: [255, 170, 188, 0.9],
    signal: [255, 110, 110, 0.9],
    snow: [240, 246, 255, 0.86],
    ambient: [220, 220, 240, 0.78],
    misc: [200, 210, 230, 0.8],
  };
  const base = palette[kind] || palette.misc;
  const wobble = 0.9 + rnd() * 0.2;
  return [base[0] * wobble, base[1] * wobble, base[2] * wobble, base[3]];
}


function motionOffset(meta, point, time) {
  const seed = hashString(`${meta.id || 'particle'}|${Math.round(point.pos[0] * 50)}|${Math.round(point.pos[1] * 50)}|${Math.round(point.pos[2] * 50)}`);
  const rnd = randSeed(seed);
  const t = time * 0.001;
  const phase = rnd() * Math.PI * 2;
  const kind = meta.kind || 'misc';
  const motion = meta.motion || 'idle';

  let x = 0, y = 0, z = 0;
  const s = 0.03 + rnd() * 0.03;

  if (motion === 'burst') {
    const r = Math.min(0.38, t * (0.65 + rnd() * 0.5));
    x = Math.cos(phase + t * 2.4) * r;
    y = Math.sin(phase * 1.3 + t * 1.9) * r * 0.85;
    z = Math.sin(phase + t * 2.1) * r;
  } else if (motion === 'fall') {
    y = -((t * (0.16 + rnd() * 0.12)) % 0.5);
    x = Math.sin(phase + t * 2.0) * s;
    z = Math.cos(phase + t * 1.7) * s;
  } else if (motion === 'drip') {
    y = -((t * (0.24 + rnd() * 0.18)) % 0.42);
    x = Math.sin(phase + t * 3.0) * s * 0.6;
    z = Math.cos(phase + t * 2.2) * s * 0.6;
  } else if (motion === 'rise') {
    y = (t * (0.18 + rnd() * 0.16)) % 0.6;
    x = Math.sin(phase + t * 2.0) * s * 0.75;
    z = Math.cos(phase + t * 1.8) * s * 0.75;
  } else if (motion === 'trail') {
    const r = 0.05 + t * 0.18;
    x = Math.cos(phase + t * 4.0) * r;
    y = Math.sin(phase * 0.7 + t * 3.2) * r * 0.5;
    z = Math.sin(phase + t * 4.4) * r;
  } else if (motion === 'drift') {
    x = Math.sin(phase + t * 0.9) * (0.04 + rnd() * 0.04);
    y = Math.cos(phase * 1.4 + t * 0.7) * (0.02 + rnd() * 0.03);
    z = Math.cos(phase + t * 0.8) * (0.04 + rnd() * 0.04);
  } else if (motion === 'bounce') {
    const bounce = Math.abs(Math.sin(t * 3.2 + phase));
    y = bounce * 0.18;
    x = Math.sin(phase + t * 2.2) * 0.05;
    z = Math.cos(phase + t * 2.2) * 0.05;
  } else {
    x = Math.sin(phase + t * 1.1) * (0.02 + rnd() * 0.03);
    y = Math.cos(phase + t * 1.0) * (0.02 + rnd() * 0.03);
    z = Math.cos(phase + t * 1.2) * (0.02 + rnd() * 0.03);
  }

  if (kind === 'magic' || kind === 'trail') {
    x += Math.cos(t * 3.0 + phase) * 0.02;
    z += Math.sin(t * 3.0 + phase) * 0.02;
  }
  if (kind === 'bubble') {
    y += Math.abs(Math.sin(t * 3.4 + phase)) * 0.08;
  }
  return [x, y, z];
}


function renderParticleOverlay(ctx, canvas, cam, transformedVerts, projectedVerts, lightDir) {
  const id = sanitizeParticleId(UI.particleSearch.value);
  const meta = PARTICLE_CATALOG[id] || { id, kind: 'misc', motion: 'idle', notes: [] };
  const t = STATE.animTime;
  const pts = STATE.samplePoints;
  const sizeBase = clamp(parseFloat(UI.particleScale.value) || 1, 0.05, 8);

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';

  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const offset = motionOffset(meta, p, t);
    const world = add3(p.pos, offset);
    const screen = projectPoint(world, cam, canvas);
    if (screen.z > cam.distance + 5) continue;
    const color = colorFromParticleMeta(id, p, t);
    const depth = clamp(1 - (screen.z + 2) / (cam.distance + 6), 0.1, 1);
    const radius = (1.8 + depth * 3.5) * sizeBase * (meta.flipbook ? 1.12 : 1);
    ctx.shadowBlur = 12 * depth;
    ctx.shadowColor = `rgba(${Math.round(color[0])},${Math.round(color[1])},${Math.round(color[2])},${color[3]})`;
    ctx.fillStyle = `rgba(${Math.round(color[0])},${Math.round(color[1])},${Math.round(color[2])},${color[3]})`;
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, radius * screen.persp, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}


function drawGameHUD(ctx, canvas, model) {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,.26)';
  ctx.fillRect(10, h - 54, 260, 40);
  ctx.fillStyle = 'rgba(255,255,255,.92)';
  ctx.font = '600 12px system-ui';
  ctx.fillText('Simulación Bedrock', 20, h - 30);
  ctx.fillStyle = 'rgba(154,172,191,.92)';
  ctx.fillText(`${model.vertices.length} vértices · ${STATE.samplePoints.length} partículas`, 20, h - 16);
  ctx.restore();
}


function resizeCanvasForDPI(canvas) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
  canvas.height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
}


function renderAll() {
  resizeCanvasForDPI(UI.sceneCanvas);
  resizeCanvasForDPI(UI.gameCanvas);
  renderScene(SCENE_CTX, UI.sceneCanvas, { game: false });
  renderScene(GAME_CTX, UI.gameCanvas, { game: true });
  drawSpritePreview();
}


function sampleOBJ() {
  return `
mtllib sample.mtl
o Cube
v -1 -1 -1
v  1 -1 -1
v  1  1 -1
v -1  1 -1
v -1 -1  1
v  1 -1  1
v  1  1  1
v -1  1  1
vt 0 0
vt 1 0
vt 1 1
vt 0 1
usemtl Sample
f 1/1 2/2 3/3 4/4
f 5/1 8/4 7/3 6/2
f 1/1 5/2 6/3 2/4
f 2/1 6/2 7/3 3/4
f 3/1 7/2 8/3 4/4
f 5/1 1/2 4/3 8/4
`.trim();
}

function sampleMTL() {
  return `
newmtl Sample
Kd 1.0 1.0 1.0
d 1.0
map_Kd bedrock_particle_atlas.png
`.trim();
}


function copyText(text) {
  if (!text) return;
  navigator.clipboard.writeText(text).catch(() => {
    UI.output.focus();
    UI.output.select();
    document.execCommand('copy');
  });
}
function downloadText(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}


function fillParticleList() {
  UI.particleList.innerHTML = PARTICLE_IDS.map(id => `<option value="${escapeHTML(id)}"></option>`).join('');
}


async function readFileText(file) {
  return await file.text();
}

async function handleFiles(files) {
  const list = Array.from(files || []);
  const objFiles = list.filter(f => extname(f.name) === 'obj');
  const mtlFiles = list.filter(f => extname(f.name) === 'mtl');
  const imageFiles = list.filter(f => ['png','jpg','jpeg','webp','tga','bmp'].includes(extname(f.name)));

  for (const f of imageFiles) {
    try {
      const tex = await loadRasterFromFile(f);
      STATE.textures.set(basename(f.name), tex);
      STATE.textureSources.set(basename(f.name), tex);
      STATE.textureSources.set(normalizePath(f.name).toLowerCase(), tex);
    } catch (err) {
      console.warn('No se pudo cargar textura', f.name, err);
    }
  }

  if (objFiles.length) {
    const objText = await readFileText(objFiles[0]);
    UI.objText.value = objText;
  }
  if (mtlFiles.length) {
    const mtlText = await readFileText(mtlFiles[0]);
    UI.mtlText.value = mtlText;
  }

  const obj = UI.objText.value.trim();
  if (obj) {
    buildModelFromText(UI.objText.value, UI.mtlText.value);
  }
}

async function loadSelectedTextModel() {
  const obj = UI.objText.value.trim();
  if (!obj) {
    STATE.model = null;
    updateStatsAndOutput();
    return;
  }
  try {
    buildModelFromText(UI.objText.value, UI.mtlText.value);
  } catch (err) {
    STATE.model = null;
    STATE.commands = [];
    UI.output.value = '';
    UI.commandInfo.textContent = '0 líneas';
    UI.stats.innerHTML = `<div class="stat" style="grid-column:1/-1"><div class="v">Error</div><div class="k">${escapeHTML(err.message)}</div></div>`;
    renderAll();
  }
}


function loadSample() {
  UI.objText.value = sampleOBJ();
  UI.mtlText.value = sampleMTL();
  buildModelFromText(UI.objText.value, UI.mtlText.value);
}


function wirePreviewControls(canvas, camera) {
  const pointers = new Map();
  let startDist = 0;
  let startZoom = 1;
  let startYaw = 0;
  let startPitch = 0;

  function updateGesture() {
    const pts = [...pointers.values()];
    if (pts.length === 1) {
      const p = pts[0];
      if (camera._last) {
        const dx = p.x - camera._last.x;
        const dy = p.y - camera._last.y;
        camera.yaw += dx * 0.008;
        camera.pitch = clamp(camera.pitch + dy * 0.008, -1.35, 1.35);
        STATE.dirty = true;
      }
      camera._last = { x: p.x, y: p.y };
    } else if (pts.length >= 2) {
      const a = pts[0], b = pts[1];
      const dx = b.x - a.x, dy = b.y - a.y;
      const dist = Math.hypot(dx, dy);
      if (!camera._gestureStart) {
        camera._gestureStart = true;
        startDist = dist;
        startZoom = camera.zoom;
        startYaw = camera.yaw;
        startPitch = camera.pitch;
      } else {
        camera.zoom = clamp(startZoom * (dist / Math.max(20, startDist)), 0.2, 4);
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        if (camera._mid) {
          const mx = midX - camera._mid.x;
          const my = midY - camera._mid.y;
          camera.yaw = startYaw + mx * 0.006;
          camera.pitch = clamp(startPitch + my * 0.006, -1.35, 1.35);
        }
        camera._mid = { x: midX, y: midY };
      }
    }
  }

  canvas.addEventListener('pointerdown', e => {
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    STATE.dirty = true;
    updateGesture();
  });
  canvas.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    updateGesture();
    STATE.dirty = true;
  });
  function endPointer(e) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) {
      camera._gestureStart = false;
      camera._mid = null;
    }
    if (pointers.size === 0) camera._last = null;
  }
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);
  canvas.addEventListener('pointerleave', endPointer);
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    camera.zoom = clamp(camera.zoom * (e.deltaY > 0 ? 0.92 : 1.08), 0.2, 4);
    STATE.dirty = true;
  }, { passive: false });
}


function refreshFromUI() {
  rebuildSamplePoints();
  buildCommands();
  refreshParticleInfo();
  updateStatsAndOutput();
}

function onParticleChanged() {
  refreshParticleInfo();
  refreshFromUI();
}

function wireEvents() {
  fillParticleList();
  wirePreviewControls(UI.sceneCanvas, STATE.camera1);
  wirePreviewControls(UI.gameCanvas, STATE.camera2);

  UI.loadBtn.addEventListener('click', loadSelectedTextModel);
  UI.sampleBtn.addEventListener('click', loadSample);
  UI.clearFilesBtn.addEventListener('click', () => {
    STATE.textures.clear();
    STATE.textureSources.clear();
    STATE.texturePixels.clear();
    UI.modelFiles.value = '';
    UI.objText.value = '';
    UI.mtlText.value = '';
    STATE.model = null;
    STATE.samplePoints = [];
    STATE.commands = [];
    UI.output.value = '';
    UI.commandInfo.textContent = '0 líneas';
    UI.stats.innerHTML = '';
    renderAll();
  });

  UI.modelFiles.addEventListener('change', async () => {
    await handleFiles(UI.modelFiles.files);
    refreshFromUI();
  });

  UI.dropzone.addEventListener('dragover', e => {
    e.preventDefault();
    UI.dropzone.style.borderColor = '#7cc4ff';
  });
  UI.dropzone.addEventListener('dragleave', () => {
    UI.dropzone.style.borderColor = '#35507d';
  });
  UI.dropzone.addEventListener('drop', async e => {
    e.preventDefault();
    UI.dropzone.style.borderColor = '#35507d';
    await handleFiles(e.dataTransfer.files);
    refreshFromUI();
  });

  for (const el of [UI.objText, UI.mtlText, UI.scale, UI.rotX, UI.rotY, UI.rotZ, UI.offX, UI.offY, UI.offZ, UI.anchor, UI.mode, UI.spacing, UI.maxParticles, UI.smoothness, UI.particleScale, UI.selector, UI.useLocalCoords, UI.onePerLine]) {
    el.addEventListener('input', refreshFromUI);
    el.addEventListener('change', refreshFromUI);
  }

  UI.particleSearch.addEventListener('input', onParticleChanged);
  UI.exportBtn.addEventListener('click', () => {
    const lines = buildCommands();
    UI.output.value = lines.join('\n');
    UI.commandInfo.textContent = `${lines.length} líneas`;
  });
  UI.copyBtn.addEventListener('click', () => copyText(UI.output.value));
  UI.downloadBtn.addEventListener('click', () => downloadText('bedrock_particles.mcfunction', UI.output.value));

  window.addEventListener('resize', () => {
    STATE.dirty = true;
    renderAll();
  });
}


function animate(now) {
  if (!STATE.lastFrame) STATE.lastFrame = now;
  const dt = now - STATE.lastFrame;
  STATE.lastFrame = now;
  STATE.animTime += dt;
  if (STATE.model) {
    renderAll();
  } else {
    renderAll();
  }
  requestAnimationFrame(animate);
}


function bootstrapParticlePreviewAtlas() {
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const tex = { canvas, pixels, width: canvas.width, height: canvas.height, source: 'assets/bedrock_particle_atlas.png' };
    STATE.textureSources.set('bedrock_particle_atlas.png', tex);
    STATE.textureSources.set('assets/bedrock_particle_atlas.png', tex);
    renderAll();
  };
  img.src = 'assets/bedrock_particle_atlas.png';
}


function initDefaults() {
  if (!UI.particleSearch.value) UI.particleSearch.value = 'minecraft:basic_flame_particle';
  refreshParticleInfo();
  renderAll();
}


wireEvents();
bootstrapParticlePreviewAtlas();
initDefaults();
loadSample();
requestAnimationFrame(animate);
