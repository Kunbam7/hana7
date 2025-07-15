package book;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target({ElementType.TYPE, ElementType.METHOD})
public @interface Reflections {

}

@interface Min {
	int value();

	String msg() default "";
}

@interface Max {
	int value();

	String msg() default "";
}

@interface In {
	String[] fristName();
}

@interface NotNull {
	String msg() default "";
}
